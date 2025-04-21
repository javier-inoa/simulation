<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter()

const diceRoll = ref(null)
const randomPassword = ref('')
const token = ref('')


const goHome = () => {
    router.push('/')
}

const rollDice = () => {
    diceRoll.value = Math.floor(Math.random() * 6) + 1
}

const generatePassword = () => {
    const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()'
    let pwd = ''

    for (let i = 0; i < 10; i++) {
        pwd += chars[Math.floor(Math.random() * chars.length)]
    }

    randomPassword.value = pwd
}

const generateToken = () => {
    let result = ''
    const hexChars = 'abcdef0123456789'

    for (let i = 0; i < 50; i++) {
        result += hexChars[Math.floor(Math.random() * hexChars.length)]
    }
    
    token.value = result
}

</script>

<template>
    <div class="w-full flex justify-center">
        <div class="w-full max-w-[1000px] min-w-[250px]">
            <button 
                @click="goHome()"
                class="my-2 p-2 border border-red-600 rounded-2xl text-red-600 w-[100px]">
                Atras
            </button>

            <h2 class="p-2 text-4xl font-semibold">
                Aleatoriedad Ejemplo
            </h2>

            <div class=" text-lg">
                <p class=" font-semibold">
                    Ejemplos
                </p>

                <ul class=" ml-5">
                    <li>
                        <span class="font-semibold">
                            1.
                        </span>
                        Duracion de una tarea en un sistema
                    </li>

                    <li>
                        <span class="font-semibold">
                            2.
                        </span>
                        Numero de errores que se producen
                    </li>

                    <li>
                        <span class="font-semibold">
                            3.
                        </span>
                        La velocidad de respuesta de un servidor
                    </li>

                    <li>
                        <span class="font-semibold">
                            4.
                        </span>
                        El tiempo que demora un componente en montarse
                    </li>
                </ul>

            </div>

            <div class="flex flex-col items-center">
                <div class="my-10 flex flex-col items-center justify-center ">
                    <p class=" font-semibold text-xl pb-2">
                        Un ejemplo es el tirar un dado no se puede predecir el resultado
                    </p>

                    <button 
                        @click="rollDice" 
                        class="px-4 py-2 bg-blue-500 text-white rounded">
                        Tirar dado 🎲
                    </button>

                    <p 
                        v-if="diceRoll !== null">
                        Resultado: <strong>{{ diceRoll }}</strong>
                    </p>
                </div>
            </div>

            <div class="flex flex-col items-center">
                <div class="mb-10 flex flex-col items-center justify-center ">
                    <p class=" font-semibold text-xl pb-2">
                        Otro Ejemplo es el generar contraseñas que son praticamente impredecibles
                    </p>

                    <button 
                        @click="generatePassword" 
                        class="px-4 py-2 bg-green-600 text-white rounded">
                        Generar contraseña 🔐
                    </button>

                    <p 
                        v-if="randomPassword">
                        Contraseña: 
                        <strong>
                            {{ randomPassword }}
                        </strong>
                    </p>
                </div>
            </div>

            <div class="flex flex-col items-center">
                <div class="mb-10 flex flex-col items-center justify-center ">
                    <p class=" font-semibold text-xl pb-2">
                        Y por ultimo el Generar tokens que son los accesos o llaves en distintas paginas
                    </p>

                    <button 
                        @click="generateToken" 
                        class="px-4 py-2 bg-purple-600 text-white rounded">
                        Generar token
                    </button>

                    <p 
                        v-if="token">
                        Token: 
                        <strong>
                            {{ token }}
                        </strong>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>