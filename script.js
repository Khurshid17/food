/* let user = {
    name: "Вася",
    surname: "Васильев",
    get fullName() { // свойство аксессор get - только возвращает результат
        return `${this.name} ${this.surname}`
    },
    set fullName(a) { // свойство аксессор set - только получает значение
        let arr = a.split(" ");
        this.name = arr[0];
        this.surname = arr[1];
    }
}

console.log(user);
user.fullName = "Петя Петров";
console.log(user); */

// Объект с продукцией
let product = {
    hamburger: {
       name: "HAMBURGER",
       price: 27000,
       kcall: 840,
       amount: 0,
       get Summ() {
            return this.price * this.amount
       },
        get Kcall () {
            return this.kcall * this.amount
        } 
    },
    cheeseBurger: {
       name: "CHEESE HAMBURGER",
       price: 30000,
       kcall: 980,
       amount: 0,
       get Summ() {
            return this.price * this.amount
       },
        get Kcall () {
            return this.kcall * this.amount
        } 
    },
    littleHamburger: {
       name: "LITTLE HAMBURGER",
       price: 23000,
       kcall: 540,
       amount: 0,
       get Summ() {
            return this.price * this.amount
       },
        get Kcall () {
            return this.kcall * this.amount
        } 
    },
    littleCheeseBurger: {
       name: "LITTLE CHEESEBURGER",
       price: 25000,
       kcall: 610,
       amount: 0,
       get Summ() {
            return this.price * this.amount
       },
        get Kcall () {
            return this.kcall * this.amount
        } 
    },
    kosherStyleHotDog: {
       name: "KOSHER STYLE HOT DOG",
       price: 16000,
       kcall: 520,
       amount: 0,
       get Summ() {
            return this.price * this.amount
       },
        get Kcall () {
            return this.kcall * this.amount
        } 
    },
    cheeseDog: {
       name: "CHEESE DOG",
       price: 18000,
       kcall: 590,
       amount: 0,
       get Summ() {
            return this.price * this.amount
       },
        get Kcall () {
            return this.kcall * this.amount
        } 
    },
    grilledCheese: {
       name: "GRILLED CHEESE",
       price: 25000,
       kcall: 420,
       amount: 0,
       get Summ() {
            return this.price * this.amount
       },
        get Kcall () {
            return this.kcall * this.amount
        } 
    },
    veggieSandwich: {
       name: "VEGGIE SANDWICH",
       price: 20000,
       kcall: 280,
       amount: 0,
       get Summ() {
            return this.price * this.amount
       },
        get Kcall () {
            return this.kcall * this.amount
        } 
    },
    veggieSandwichWithCheese: {
       name: "VEGGIE SANDWICH WITH CHEESE",
       price: 22000,
       kcall: 420,
       amount: 0,
        get Summ() {
            return this.price * this.amount
        },
        get Kcall () {
            return this.kcall * this.amount
        } 
    },
    littleFries: {
       name: "LITTLE FRIES",
       price: 15000,
       kcall: 530,
       amount: 0,
        get Summ() {
            return this.price * this.amount
        },
        get Kcall () {
            return this.kcall * this.amount
        } 
    },
    regularFries: {
       name: "REGULAR FRIES",
       price: 17000,
       kcall: 950,
       amount: 0,
        get Summ() {
            return this.price * this.amount
        },
        get Kcall () {
            return this.kcall * this.amount
        } 
    },
    largeFries: {
       name: "LARGE FRIES",
       price: 19000,
       kcall: 1310,
       amount: 0,
        get Summ() {
            return this.price * this.amount
        },
        get Kcall () {
            return this.kcall * this.amount
        } 
    },
    littleCajunFries: {
       name: "LITTLE CAJUN FRIES",
       price: 15000,
       kcall: 530,
       amount: 0,
        get Summ() {
            return this.price * this.amount
        },
        get Kcall () {
            return this.kcall * this.amount
        } 
    },
    regularCajunFries: {
       name: "REGULAR CAJUN FRIES",
       price: 17000,
       kcall: 950,
       amount: 0,
        get Summ() {
            return this.price * this.amount
        },
        get Kcall () {
            return this.kcall * this.amount
        } 
    },
    largeCajunFries: {
       name: "LARGE CAJUN FRIES",
       price: 19000,
       kcall: 1310,
       amount: 0,
        get Summ() {
            return this.price * this.amount
        },
        get Kcall () {
            return this.kcall * this.amount
        } 
    },
    cola500: {
       name: "COLA 0.5L",
       price: 5000,
       kcall: 1310,
       amount: 0,
        get Summ() {
            return this.price * this.amount
        },
        get Kcall () {
            return this.kcall * this.amount
        } 
    },
    fanta500: {
       name: "FANTA 0.5L",
       price: 5000,
       kcall: 1310,
       amount: 0,
        get Summ() {
            return this.price * this.amount
        },
        get Kcall () {
            return this.kcall * this.amount
        } 
    },
    sprite500: {
       name: "SPRITE 0.5L",
       price: 5000,
       kcall: 1310,
       amount: 0,
        get Summ() {
            return this.price * this.amount
        },
        get Kcall () {
            return this.kcall * this.amount
        } 
    },
    cola1500: {
       name: "COLA 0.5L",
       price: 10000,
       kcall: 1310,
       amount: 0,
        get Summ() {
            return this.price * this.amount
        },
        get Kcall () {
            return this.kcall * this.amount
        } 
    },
    fanta1500: {
       name: "FANTA 0.5L",
       price: 10000,
       kcall: 1310,
       amount: 0,
        get Summ() {
            return this.price * this.amount
        },
        get Kcall () {
            return this.kcall * this.amount
        } 
    },
    sprite1500: {
       name: "SPRITE 0.5L",
       price: 10000,
       kcall: 1310,
       amount: 0,
        get Summ() {
            return this.price * this.amount
        },
        get Kcall () {
            return this.kcall * this.amount
        } 
    },
    stakan: {
       name: "STAKAN",
       price: 4000,
       amount: 0,
        get Summ() {
            return this.price * this.amount
        }
    },
    milkshake: {
       name: "FIVE GUYS MILKSHAKE",
       price: 10000,
       amount: 0,
        get Summ() {
            return this.price * this.amount
        }
    },
    milkshake2: {
       name: "WHIPPED CREAM",
       price: 13000,
       amount: 0,
        get Summ() {
            return this.price * this.amount
        }
    },
    milkshake3: {
       name: "COFFEE",
       price: 13000,
       amount: 0,
        get Summ() {
            return this.price * this.amount
        }
    },
    milkshake4: {
       name: "OREO CREME",
       price: 13000,
       amount: 0,
        get Summ() {
            return this.price * this.amount
        }
    },
    milkshake5: {
       name: "OREO CREME",
       price: 13000,
       amount: 0,
        get Summ() {
            return this.price * this.amount
        }
    },
    milkshake6: {
       name: "SALTED CARAMEL",
       price: 13000,
       amount: 0,
        get Summ() {
            return this.price * this.amount
        }
    },
    milkshake7: {
       name: "PEANUT BUTTER",
       price: 13000,
       amount: 0,
        get Summ() {
            return this.price * this.amount
        }
    },
    milkshake8: {
       name: "DOUBLE STUFF (OREO CREME & OREO COOKIE)",
       price: 13000,
       amount: 0,
        get Summ() {
            return this.price * this.amount
        }
    },
    milkshake9: {
       name: "CHERRY",
       price: 13000,
       amount: 0,
        get Summ() {
            return this.price * this.amount
        }
    },
    milkshake10: {
       name: "BANANA",
       price: 13000,
       amount: 0,
        get Summ() {
            return this.price * this.amount
        }
    }
}
// Объект с ингредиентами
let extraProduct = {
    doubleMayonnaise: {
        name: "Двойной майонез",
        price: 500,
        kcall: 50
    },
    lettuce: {
        name: "Салатный лист",
        price: 300,
        kcall: 10
    },
    cheese: {
        name: "Сыр",
        price: 400,
        kcall: 30
    }
}

let btnPlusOrMinus = document.querySelectorAll('.main__product-btn');
for (let i = 0; i < btnPlusOrMinus.length; i++) {
    const element = btnPlusOrMinus[i];
    element.addEventListener("click", function () {
        plusOrMinus(this)
    })
}

function plusOrMinus(element) {
    // .closest() - возвращает родителя по селектору
    const parent = element.closest(".main__product");
    // .hasAttribute(name) - возвращает true, если атрибут есть
    // .getAttribute(name) - возвращает значение атрибута
    // .setAttribute(name, value) - изменяет значение атрибута
    // .removeAttribute(name) - удаляет атрибут
    let parentId = parent.getAttribute("id") // id секции в которой находится плюс или минус
    let symbol = element.getAttribute("data-symbol") // символ + или -
    if (symbol == "+" && product[parentId].amount < 50) {
        product[parentId].amount++
    } else if (symbol == "-" && product[parentId].amount > 0) {
        product[parentId].amount--
    }

    const num = parent.querySelector('.main__product-num');
    num.innerHTML = product[parentId].amount;
    const sum = parent.querySelector(".main__product-price span");
    sum.innerHTML = product[parentId].Summ;
    const kcall = parent.querySelector(".main__product-kcall span");
    kcall.innerHTML = product[parentId].Kcall;  
}

// чекбоксы ингредиентов
const checkBox = document.querySelectorAll('.main__product-checkbox');

for (let i = 0; i < checkBox.length; i++) {
    const element = checkBox[i];
    element.addEventListener("click", function () {
        addExtraProduct(this);
    })
}

function addExtraProduct(element) {
    const parent = element.closest(".main__product");
    let parentId = parent.getAttribute("id");
    let elAtr = element.getAttribute("data-extra");
    product[parentId][elAtr] = element.checked;
    if (product[parentId][elAtr] == true) {
        product[parentId].kcall = product[parentId].kcall + extraProduct[elAtr].kcall
        product[parentId].price = product[parentId].price + extraProduct[elAtr].price
    } else {
        product[parentId].kcall = product[parentId].kcall - extraProduct[elAtr].kcall
        product[parentId].price = product[parentId].price - extraProduct[elAtr].price
    }
    // const num = parent.querySelector('.main__product-num');
    // num.innerHTML = product[parentId].amount;
    const sum = parent.querySelector(".main__product-price span");
    sum.innerHTML = product[parentId].Summ;
    const kcall = parent.querySelector(".main__product-kcall span");
    kcall.innerHTML = product[parentId].Kcall;  
}

// кнопка Заказать
const addCart = document.querySelector('.addCart');
// модальное окно
const receipt = document.querySelector('.receipt');
// Чек
const receiptWindow = document.querySelector('.receipt__window');
// информация Чека
const receiptWindowOut = document.querySelector('.receipt__window-out');
// кнопка модального окна
const receiptWindowBtn = document.querySelector('.receipt__window-btn');



// ссылка на объект
/* let x = {name: "Вася"};
let y = x;
console.log(x);
console.log(y);
y.name = "Петя";
console.log(x);
console.log(y); */

let totalName = ""; // список товаров
let totalPrice = 0; // общая цена
let totalKcall = 0; // общая каллорийность
let arrayProduct = []; // выбранная продукция

addCart.addEventListener("click", function () {
    for (const key in product) {
        const po = product[key];
        if (po["amount"] > 0) {
            arrayProduct.push(po)
            for (const exPo in po) {
                if (po[exPo] === true) {
                    // "\n" - символ переноса строки
                    // po.name = po.name + "\n"+ extraProduct[exPo].name
                    po.name += `\n${extraProduct[exPo].name}`                    
                }
            }
            /* po.price = po.Summ;
            po.kcall = po.Kcall; */
        }
    }
    for (let i = 0; i < arrayProduct.length; i++) {
        const element = arrayProduct[i];
        totalName += "\n" + element.name + "\n"; // складываем все названия продуктов
        totalPrice += element.Summ;
        totalKcall += element.Kcall;
    }
    receiptWindowOut.innerHTML = `Вы купили: \n${totalName} \nКаллорийность: ${totalKcall} \nСтоимость покупки: ${totalPrice} сумм`;
    receipt.style.display = "flex";
    setTimeout(() => {
        receipt.style.opacity = 1;
        receiptWindow.style.top = 0;
    }, 10);
    document.body.style.overflow = "hidden";
    const num = document.querySelectorAll('.main__product-num');
    const sum = document.querySelectorAll(".main__product-price span");
    const kcall = document.querySelectorAll(".main__product-kcall span");
    
    for (let i = 0; i < num.length; i++) {
        num[i].innerHTML = 0;
        sum[i].innerHTML = 0;
        kcall[i].innerHTML = 0;
    }
})

receiptWindowBtn.addEventListener("click", function () {
    window.location.reload();
})

let view = document.querySelector('.view'),
    mainProductInfo = document.querySelectorAll('.main__product-info'),
    viewClose = document.querySelector('.view__close')

for (let i = 0; i < mainProductInfo.length; i++) {
    mainProductInfo[i].addEventListener('dblclick', function () {
        let pathImg = this.querySelector('img').getAttribute("src")
        console.log(pathImg);
        view.classList.add("active")
        view.querySelector('img').setAttribute("src", pathImg)
    })
}

viewClose.addEventListener('click', function () {
    view.classList.remove("active")
})

function stepByStep() {
    let num = document.querySelector('.header__timer-extra');
    num.innerHTML++ 
    if (num.innerHTML < 20) {
        setTimeout(() => {
            stepByStep()
        }, 80);
    } else if (num.innerHTML < 50) {
        setTimeout(() => {
            stepByStep()
        }, 100);
    } else if (num.innerHTML < 80) {
        setTimeout(() => {
            stepByStep()
        }, 170);
    } else if (num.innerHTML < 95) {
        setTimeout(() => {
            stepByStep()
        }, 250);
    } else if (num.innerHTML <= 99) {
        setTimeout(() => {
            stepByStep()
        }, 300);
    }
    
}
stepByStep()
// console.dir(window);