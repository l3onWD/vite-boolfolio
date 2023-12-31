<script>
/* -----------------------------------------
* RESOURCES
-------------------------------------------*/
/*** COMPONENTS ***/
import PageLoader from '../components/PageLoader.vue';
import BaseAlert from '../components/base/BaseAlert.vue';

/*** DATA ***/
import axios from 'axios';
const endpoint = 'http://127.0.0.1:8000/api/contact-message';
const emptyForm = { sender: '', subject: '', message: '' };


export default {
    components: { PageLoader, BaseAlert },
    data: () => ({
        errors: {},
        successMessage: null,
        isPristine: true,
        loaderIsActive: false,
        form: { ...emptyForm }
    }),
    computed: {
        hasErrors() {
            return Object.keys(this.errors).length;
        },
        showAlert() {
            return Boolean(this.hasErrors || this.successMessage);
        },
        alertType() {
            return this.hasErrors ? 'danger' : 'success';
        }
    },
    methods: {
        sendMessage() {

            // Reset
            this.successMessage = null;
            this.isPristine = false;

            // Frontend Validation
            this.validateForm();
            if (this.hasErrors) return;

            // Show Loader
            this.loaderIsActive = true;

            // API request
            axios.post(endpoint, this.form)
                .then(() => {
                    // Reset form and set an alert message
                    this.form = { ...emptyForm };
                    this.isPristine = true;
                    this.successMessage = 'Messaggio inviato con successo';
                })
                .catch(err => {
                    // If Bad Request
                    if (err.response.status === 400) {
                        // Get response errors
                        const { errors } = err.response.data;

                        // Set response errors key to page errors object
                        // (pick only the first message because of validation that can't have more than 1)
                        for (const key in errors) this.errors[key] = errors[key][0];

                    } else {
                        // Generic error
                        console.error(err);
                        this.errors = { general: 'Impossibile inviare la richiesta.' }
                    }
                })
                .then(() => {
                    // Hide Loader
                    this.loaderIsActive = false;
                });
        },
        validateField(field) {
            if (this.isPristine) return '';
            return this.errors[field] ? 'is-invalid' : 'is-valid';
        },
        validateForm() {

            // Error Reset
            this.errors = {};

            // Sender Mail Validation
            if (!this.form.sender) this.errors.sender = 'La mail è obbligatoria';
            else if (!this.form.sender.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) this.errors.sender = 'La mail non è vailda';

            // Subject Validation
            if (!this.form.subject) this.errors.subject = 'L\'oggetto è obbligatorio';

            // Message Validation
            if (!this.form.message) this.errors.message = 'Il messaggio è obbligatorio';

        }
    }
}
</script>


<template>
    <!-- Page Main -->
    <main class="container my-4">

        <!-- Page Loader -->
        <PageLoader v-if="loaderIsActive" :isActive="loaderIsActive" />

        <!-- Contact Form -->
        <section v-else>

            <!-- Title -->
            <h1 class="mb-4">Contatti</h1>

            <!-- Alert -->
            <BaseAlert v-if="showAlert" :type="alertType">
                <div v-if="successMessage">{{ successMessage }}</div>
                <ul v-if="hasErrors">
                    <li v-for="(error, field) in errors" :key="field">{{ error }}</li>
                </ul>
            </BaseAlert>

            <!-- Form -->
            <form @submit.prevent="sendMessage" novalidate>

                <div class="row">
                    <!-- Email -->
                    <div class="col-6">
                        <div class="mb-3">
                            <label for="sender" class="form-label">Email<sup class="text-danger">*</sup></label>
                            <input v-model.trim="form.sender" type="email" class="form-control"
                                :class="validateField('sender')" id="sender" placeholder="name@example.it" required>
                            <div class="invalid-feedback">
                                {{ errors.sender }}
                            </div>
                        </div>
                    </div>

                    <!-- Subject -->
                    <div class="col-6">
                        <div class="mb-3">
                            <label for="subject" class="form-label">Oggetto<sup class="text-danger">*</sup></label>
                            <input v-model.trim="form.subject" type="text" class="form-control"
                                :class="validateField('subject')" id="subject" required>
                            <div class="invalid-feedback">
                                {{ errors.subject }}
                            </div>
                        </div>
                    </div>

                    <!-- Message -->
                    <div class="col-12">
                        <div class="mb-3">
                            <label for="message" class="form-label">Messaggio<sup class="text-danger">*</sup></label>
                            <textarea v-model.trim="form.message" class="form-control" :class="validateField('message')"
                                id="message" rows="10" required></textarea>
                            <div class="invalid-feedback">
                                {{ errors.message }}
                            </div>
                        </div>
                    </div>

                    <!-- Newsletter Subscription -->
                    <div class="col-12">
                        <div class="form-check">
                            <input v-model="form.subscription" class="form-check-input" type="checkbox"
                                :class="validateField('subscription')" id="subscription">
                            <div class="invalid-feedback">
                                {{ errors.subscription }}
                            </div>
                            <label class="form-check-label" for="subscription">
                                Iscriviti alla newsletter
                            </label>
                        </div>
                    </div>

                    <div class="col-12 text-end">
                        <button class="btn btn-lg btn-success">Invia</button>
                    </div>
                </div>

            </form>
        </section>
    </main>
</template>


<style></style>