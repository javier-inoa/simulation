<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const goProyectOne = () => {
    router.push('/proyect/one')
}

const goProyectTwo = () => {
    router.push('/proyect/two')
}

</script>

<template>
    <div class="w-full flex justify-center">
        <div class="w-full max-w-[1000px] min-w-[250px]">
            <div class="flex justify-between items-center">
                <h1 class="p-2 text-4xl font-semibold">
                    Tareas de Simulacion
                </h1>

                <p class=" text-2xl font-semibold">
                    Javier Inca Apaza
                </p>
            </div>

            <section class="w-full border border-black/10 shadow-md flex rounded-4xl mt-10">
                <div class="w-1/3 rounded-4xl flex p-5">
                    <img 
                        src="https://miro.medium.com/v2/resize:fit:9856/1*dhsQ2FFW6cdhX56tAAL3sw.jpeg"
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
            </section>

            <section class="w-full border border-black/10 shadow-md flex rounded-4xl mt-10">
                <div class="w-1/3 rounded-4xl flex p-5">
                    <img 
                        src="https://cdn.pixabay.com/photo/2018/12/05/11/16/dices-3857549_960_720.jpg"
                        class="object-cover rounded-2xl">
                </div>

                <div class="w-2/3 p-5 flex flex-col justify-between">
                    <p class="font-semibold text-2xl">
                        Proyecto 2: Simular lanzamiento de 2 Dados
                    </p>

                    <div class="text-sm space-y-2">
                        <li>
                            Modifica la función de simulación para que realice un gran número de simulaciones (por ejemplo, 10,000 lanzamientos de los dos dados).
                        </li>
    
                        <li>
                            Almacena y cuenta la frecuencia con la que ocurre cada posible suma (desde 2 hasta 12).
                        </li>
    
                        <li>
                            Calcula la probabilidad empírica de cada suma (frecuencia de la suma / número total de simulaciones).
                        </li>
    
                        <li>
                            Muestra en la consola las probabilidades empíricas de cada posible suma.
                        </li>
    
                        <li>
                            El código debe estar comentado explicando en tus palabras paso a paso el funcionamiento del algoritmo.
                        </li>
                    </div>

                    <div class="w-full flex justify-center">
                        <button 
                            @click="goProyectTwo()"
                            class="p-2 bg-blue-900 rounded-2xl text-white cursor-pointer">
                            Ver Proyecto
                        </button>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>