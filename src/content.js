export function createLi (arrayCars){
    for (const car of arrayCars){
        const selected = document.getElementById('modelInput');
        selected.innerHTML += `<option>${car.name}</option>`;
    }
}

export function removeContent(){
    let content = document.getElementById("cards");
    content.innerHTML = '';
}

export function loadCards(arrayCars){
    removeContent();
    let destination = document.getElementById("cards");
    for (const car of arrayCars) {
        let card = document.createElement("section");
        card.classList.add("text-gray-600");
        card.classList.add("body-font");

        card.innerHTML =    `
                            <div class="container max-w-7xl my-10 mx-auto px-4 sm:px-6 lg:px-8 card" id="${car.id}">
                                
                                <div class="p-5 flex items-center mx-auto bg-white border-b border-gray-200 rounded-lg sm:flex-row flex-col min-width-360">
                                    <!-- Imagen principal tarjeta -->
                                    <div class="w-80 h-auto pr-10 pr-0 sm:pr-10 sm:w-60 inline-flex items-center justify-center flex-shrink-0">
                                        <img src="https://rently.blob.core.windows.net/hertz/CarModel/26756080-0e17-4e05-8e6a-fa67489347fe.jpg"/>
                                    </div>
                                    
                                    <!-- Caracteristicas del vehiculo -->
                                    <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                                        <h1 class="text-black text-2xl title-font font-bold mb-2">${car.name}</h1>
                                        <div class="inline-flex space-x-2">
                                            <img src="https://img.icons8.com/external-those-icons-lineal-color-those-icons/24/undefined/external-speedometer-cars-components-those-icons-lineal-color-those-icons.png" class="inline-flex "/>
                                            <p> Kilometraje ilimitado</p>
                                        </div>
                                        <div class="py-4 characteristics">
                                            <div class=" inline-block mr-2">
                                                <div class="flex pr-2 h-full items-center space-x-2">
                                                    <img src="https://img.icons8.com/external-those-icons-lineal-color-those-icons/24/undefined/external-safety-seat-cars-components-those-icons-lineal-color-those-icons.png"/>
                                                    <p class="title-font font-medium">${car.passengers}</p>
                                                </div>
                                            </div>
                                            <div class="inline-block mr-2">
                                                <div class="flex  pr-2 h-full items-center space-x-2">
                                                    <img src="https://img.icons8.com/external-those-icons-lineal-color-those-icons/24/undefined/external-fuel-cars-components-those-icons-lineal-color-those-icons.png"/>
                                                    <p class="title-font font-medium">${car.fuel}</p>
                                                </div>
                                            </div>
                                            <div class="inline-block mr-2">
                                                <div class="flex  pr-2 h-full items-center space-x-2">
                                                    <img src="https://img.icons8.com/external-those-icons-lineal-color-those-icons/24/undefined/external-gearshift-cars-components-those-icons-lineal-color-those-icons-3.png"/>
                                                    <p class="title-font font-medium">${car.transmission}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="sm:text-right text-center ml-0 mt-6 sm:mt-0 space-x-2 w-15 max-w-sm">
                                        <button type="button" class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-cyan-500 text-base font-medium text-white hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-200 sm:ml-3 sm:w-auto sm:text-sm">Alquilar</button>
                                        <a class="mt-3 text-indigo-500 inline-flex items-center">Mas info
                                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                                            </svg>
                                            </a>
                                    </div>

                                </div>
                            </div>
                            `;
        destination.appendChild(card);
    }

    //Agregamos la caracteristica ABS si corresponde

    let cards = document.getElementsByClassName("card");
    for (let card of cards) {
        for (let car of arrayCars) {
            if(card.id == car.id && car.abs == true){
                const characteristics = card.querySelector('.characteristics');
                characteristics.innerHTML += `
                                        <div class="inline-block mr-2">
                                            <div class="flex pr-2 h-full items-center space-x-2">
                                                <img src="https://img.icons8.com/external-those-icons-lineal-color-those-icons/24/undefined/external-abs-cars-components-those-icons-lineal-color-those-icons.png"/>
                                                <p class="title-font font-medium">ABS</p>
                                            </div>
                                        </div>
                                        `;
            }
        }
    }
}

export function nextIndexOf(array) {
    return array.length +1;
}
