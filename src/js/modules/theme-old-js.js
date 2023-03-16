let successArrived = "ym(39635740,'reachGoal','success_arrived')";
let elementsArrived = document.getElementsByClassName("plugin_arrived-button");

let openArrivedWindows = function () {
    ym(39635740, 'reachGoal', 'open_arrived_windows');
    let elementsForm = document.getElementsByClassName("plugin_arrived-value submit");
    for (let i = 0; i < elementsForm.length; i++) {
        elementsForm[i].innerHTML = '<input type="submit" value="Уведомить меня" onclick="' + successArrived + '"><div class="plugin_arrived-loading">Проверка...</div>';
    }
};

for (let i = 0; i < elementsArrived.length; i++) {
    elementsArrived[i].addEventListener('click', openArrivedWindows, false);
}


function onCheckedFilter(codename, value) {
    let checkBoxCode = codename + '_' + value;
    if (document.getElementById(checkBoxCode).checked === true) {

        let fastFilter = document.getElementById("fast-filter");
        let valueFilter = document.getElementById("value-" + checkBoxCode);

        toogleClass('.filters-show-button', 'unhidden', 'hidden');
        toogleClass('.' + checkBoxCode, 'hidden', 'unhidden');
        console.log(valueFilter.innerHTML);

        fastFilter.innerHTML = fastFilter.innerHTML + '<li><button class="button button-grey fast-filter_button" id="button_' + checkBoxCode + '">' + valueFilter.innerHTML + '</button></li>';
    } else {
        toogleClass('.filters-show-button', 'unhidden', 'hidden');
    }
}

function onClickClose(elem, del_elem) {
    document.addEventListener('click', function (e) {
        if (e.target.id === elem) {
            removeClass(document.getElementById(elem), del_elem);
        }
        if (e.target.id === elem && del_elem === '') {
            removeClass(document.getElementById(elem), 'unhidden');
            addClass(document.getElementById(elem), 'hidden');
        }
    });
}

function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}

function setCookie(name, value, options = {}) {
    options = {
        path: '/',
    };

    if (options.expires instanceof Date) {
        options.expires = options.expires.toUTCString();
    }

    let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);

    for (let optionKey in options) {
        updatedCookie += "; " + optionKey;
        let optionValue = options[optionKey];
        if (optionValue !== true) {
            updatedCookie += "=" + optionValue;
        }
    }

    document.cookie = updatedCookie;
}



function addCompare(id, name) {
    let obj = getCookie('shop_compare');
    let flag = false;
    let counter = document.getElementById("compare-counter").innerText;

    if (typeof (obj) != 'undefined' && obj != null && obj != '') {
        const compareRez = obj.split(",");
        compareRez.forEach(function (item) {
            if (item == id) {
                flag = true;
            }
        });
        if (flag == true) {
            return;
        }
        obj += ',' + id;
        setCookie('shop_compare', obj);
    } else {
        obj = id;
        setCookie('shop_compare', obj);
    }

    counter = parseInt(counter) + 1;
    document.getElementById("compare-counter").innerText = counter;
    if (counter == 1) {
        toogleClass('#compare-counter', 'hidden', 'unhidden');
    }

    toast('<p id="popup-menu-info_product-name">' + name + ' добавлен к сравнению.</p><a class="button" href="/compare/">Перейти к сравнению</a>');
}

function compareCheck() {
    let obj = getCookie('shop_compare');
    if (typeof (obj) != 'undefined' && obj != null && obj != '') {
        const compareRez = obj.split(",");
        compareRez.forEach(function (item) {
            if (typeof (item) != 'undefined' && item != null && item != '') {
                toogleClass('.compare-button-' + item, 'unhidden', 'hidden');
                toogleClass('.uncompare-button-' + item, 'hidden', 'unhidden');
            }
        });
    } else {
        deleteCookie('shop_compare');
    }
}

function removeCompare(id, name) {

    let obj = getCookie('shop_compare');
    const compareRez = obj.split(",");
    let myArr = [];
    let counter = document.getElementById("compare-counter").innerText;
    let timerPopup;

    compareRez.forEach(function (item) {
        if (item != id) {
            if (typeof (item) != 'undefined' && item != null && item != '') {
                myArr.push(item);
            }
        }
    });
    setCookie('shop_compare', myArr);
    if (myArr == '') {
        compareCheck();
    }
    counter = parseInt(counter) - 1;
    document.getElementById("compare-counter").innerText = counter;
    if (counter == 0) {
        toogleClass('#compare-counter', 'unhidden', 'hidden');
    }
    toast(name + ' удален из сравнения.', 'critical');
}

function addClass(element, className) {
    element.className += ' ' + className;
}

function removeClass(element, className) {
    element.className = element.className.replace(
        new RegExp('( |^)' + className + '( |$)', 'g'), ' ').trim();
}

function toogleClass(find, condition, newcondition) {
    const findClasses = document.querySelectorAll(find);
    findClasses.forEach(element => {
        element.classList.add(newcondition);
        element.classList.remove(condition);
    });
}