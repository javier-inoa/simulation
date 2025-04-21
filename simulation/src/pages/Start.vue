<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const goProyectOne = () => {
    router.push('/proyect/one')
}

</script>

<template>
    <div class="w-full flex justify-center">
        <div class="w-full max-w-[1000px] min-w-[250px]">
            <h1 class="p-2 text-4xl font-semibold">
                Tareas de Simulacion
            </h1>

            <div class="w-full border border-black/5 shadow-2xl flex rounded-4xl mt-10">
                <div class="w-1/3 rounded-4xl flex p-5">
                    <img 
                        src="https://cdn.pixabay.com/photo/2018/12/05/11/16/dices-3857549_960_720.jpg"
                        class="object-cover rounded-2xl">
                </div>

                <div class="w-2/3 p-5 flex flex-col justify-between">
                    <p class="font-semibold text-2xl">
                        Proyecto 1: Aleatoriedad
                    </p>

                    <p class=" text-lg py-5">
                        Es la incorporación de elementos impredecibles o variables para simular 
                        el comportamiento real de un sistema. Esto permite representar situaciones 
                        que no siempre se repiten igual cada vez que ocurren, como el tiempo que tarda 
                        en llegar un dato, el momento en que falla un servidor.
                    </p>

                    <div class="w-full flex justify-center">
                        <button 
                            @click="goProyectOne()"
                            class="p-2 bg-blue-900 rounded-2xl text-white cursor-pointer">
                            Ver Ejemplo
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>