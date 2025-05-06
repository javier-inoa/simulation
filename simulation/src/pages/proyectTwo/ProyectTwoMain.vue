<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const resultados = ref([])
const numeroLanzamientos = ref(10000)

// Función que simula lanzar un dado de 6 caras y devuelve un número aleatorio entre 1 y 6
const lanzarDado = () => {
    return Math.floor(Math.random() * 6) + 1
}

// Función que simula lanzar dos dados varias veces y calcula las probabilidades de cada suma
const simularDosDados = () => {
    // Validamos que el número de lanzamientos sea válido (mayor que 0)
    if (!numeroLanzamientos.value || numeroLanzamientos.value <= 0) {
        alert("Por favor, ingresa un número válido de lanzamientos.")
        return
    }

    // Objeto para contar cuántas veces aparece cada suma posible entre los dos dados (de 2 a 12)
    const frecuencias = {
        2: 0,
        3: 0, 
        4: 0,
        5: 0, 
        6: 0,
        7: 0, 
        8: 0, 
        9: 0, 
        10: 0, 
        11: 0, 
        12: 0
    }

    // Bucle que repite el lanzamiento de dos dados la cantidad de veces indicada
    for (let i = 0; i < numeroLanzamientos.value; i++) {
        const dado1 = lanzarDado() // Lanzamos el primer dado
        const dado2 = lanzarDado() // Lanzamos el segundo dado
        const suma = dado1 + dado2 // Calculamos la suma de los dos dados

        frecuencias[suma]++ // Sumamos 1 al contador de esa suma
    }

    // Convertimos el objeto de frecuencias en un arreglo con objetos más fáciles de mostrar en pantalla
    resultados.value = Object.keys(frecuencias).map(suma => {
        const frecuencia = frecuencias[suma] // Cuántas veces ocurrió esa suma

        return {
            suma: Number(suma), // Convertimos el texto de la clave a número
            frecuencia, // Frecuencia de aparición
            probabilidad: (frecuencia / numeroLanzamientos.value * 100).toFixed(2) + '%' // Calculamos la probabilidad en porcentaje
        }
    })
}

//realizar el primer lanzamiento
simularDosDados()

// ir a la pagina de inicio
const goHome = () => {
    router.push('/')
}
</script>


<template>
    <div class="p-6 max-w-3xl mx-auto space-y-5">
        <button 
            @click="goHome()"
            class="px-3 rounded-lg border border-red-500 text-red-600">
            Inicio
        </button>

        <h1 class="text-2xl font-bold text-center mb-6">
            Simulación de Dos Dados {{ numeroLanzamientos }} lanzamientos
        </h1>

        <div class="flex justify-center space-x-5">
            <div class="flex flex-col w-1/3">
                <label class="text-sm">
                    Cantidad de Lanzamientos
                </label>

                <input 
                    v-model="numeroLanzamientos" 
                    type="number" 
                    placeholder="Numero de Lanzamientos"
                    class="border rounded-lg p-2 w-full">
            </div>

            <button 
                @click="simularDosDados()" 
                class=" bg-black text-white px-2 my-2 rounded-2xl">
                Lanzar Dados
            </button>
        </div>

        <table class="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
            <thead class="bg-blue-100">
                <tr>
                    <th class="py-2 px-4 border-b">
                        Suma
                    </th>

                    <th class="py-2 px-4 border-b">
                        Frecuencia
                    </th>

                    <th class="py-2 px-4 border-b">
                        Probabilidad
                    </th>
                </tr>
            </thead>

            <tbody>
                <tr 
                    v-for="resultado in resultados" 
                    :key="resultado.suma"
                    class="text-center hover:bg-blue-50 transition">
                    <td class="py-2 px-4 border-b">
                        {{ resultado.suma }}
                    </td>
                    
                    <td class="py-2 px-4 border-b">
                        {{ resultado.frecuencia }}
                    </td>
                    
                    <td class="py-2 px-4 border-b">
                        {{ resultado.probabilidad }}
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
