<script>
/* -----------------------------------------
* RESOURCES
-------------------------------------------*/
/*** COMPONENTS ***/
import PageLoader from '../components/PageLoader.vue';
import BaseAlert from '../components/base/BaseAlert.vue';


export default {
    components: { PageLoader, BaseAlert },
    data: () => ({
        alert: {},
        loaderIsActive: false
    })
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

            <form novalidate>

                <div class="row">
                    <!-- Email -->
                    <div class="col-6">
                        <div class="mb-3">
                            <label for="email" class="form-label">Email<sup class="text-danger">*</sup></label>
                            <input type="email" class="form-control" id="email" placeholder="name@example.it" required>
                        </div>
                    </div>

                    <!-- Subject -->
                    <div class="col-6">
                        <div class="mb-3">
                            <label for="subject" class="form-label">Oggetto<sup class="text-danger">*</sup></label>
                            <input type="text" class="form-control" id="subject" required>
                        </div>
                    </div>

                    <!-- Message -->
                    <div class="col-12">
                        <div class="mb-3">
                            <label for="message" class="form-label">Messaggio<sup class="text-danger">*</sup></label>
                            <textarea class="form-control" id="message" rows="10" required></textarea>
                        </div>
                    </div>

                    <div class="col-12 text-end">
                        <button type="button" class="btn btn-lg btn-success">Invia</button>
                    </div>
                </div>

            </form>
        </section>
    </main>

    <!-- Page Loader -->
    <PageLoader :isActive="loaderIsActive" />
</template>


<style></style>