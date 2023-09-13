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
        alert: {},
        loaderIsActive: false,
        form: { ...emptyForm }
    }),
    methods: {
        sendMessage() {
            axios.post(endpoint, this.form)
                .then(() => {
                    this.form = { ...emptyForm }
                })
                .catch(err => {
                    console.error(err);
                })
                .then(() => {
                    // Hide Loader
                    this.loaderIsActive = false;
                });
        }
    }
}
</script>


<template>
    <!-- Page Main -->
    <main class="container my-4">

        <!-- Alert -->
        <BaseAlert />

        <!-- Contact Form -->
        <section>

            <h1 class="mb-4">Contatti</h1>

            <form @submit.prevent="sendMessage" novalidate>

                <div class="row">
                    <!-- Email -->
                    <div class="col-6">
                        <div class="mb-3">
                            <label for="sender" class="form-label">Email<sup class="text-danger">*</sup></label>
                            <input v-model.trim="form.sender" type="email" class="form-control" id="sender"
                                placeholder="name@example.it" required>
                        </div>
                    </div>

                    <!-- Subject -->
                    <div class="col-6">
                        <div class="mb-3">
                            <label for="subject" class="form-label">Oggetto<sup class="text-danger">*</sup></label>
                            <input v-model.trim="form.subject" type="text" class="form-control" id="subject" required>
                        </div>
                    </div>

                    <!-- Message -->
                    <div class="col-12">
                        <div class="mb-3">
                            <label for="message" class="form-label">Messaggio<sup class="text-danger">*</sup></label>
                            <textarea v-model.trim="form.message" class="form-control" id="message" rows="10"
                                required></textarea>
                        </div>
                    </div>

                    <div class="col-12 text-end">
                        <button class="btn btn-lg btn-success">Invia</button>
                    </div>
                </div>

            </form>
        </section>
    </main>

    <!-- Page Loader -->
    <PageLoader :isActive="loaderIsActive" />
</template>


<style></style>