let items = [
    //комплектующие
    [
        //процессоры
        {"name":"Процессоры","items":[
            {"name":"Intel Core i5-760", "cost":"599$","src":"https://avatars.mds.yandex.net/get-mpic/1605421/img_id3142174968434431279/9hq"},
            {"name":"Amd ryzen 9", "cost":"679$","src":"https://www.onlinetrade.ru/img/items/m/1532795_1.jpg"},
            {"name":"Intel Core i9", "cost":"709$","src":"https://hardprice.ru/images/p/s/suzcnk.jpg"},
            {"name":"Intel Core i3-550", "cost":"399$","src":"https://c.dns-shop.ru/thumb/st4/fit/300/300/f0e169500ab3b993fb17d192f5217911/6f6b0e57d620ee566a5d3834299c6f2a106f1e7c5276afe797ba069de83cefdf.jpg"}
        ]},
        {"name":"Видеокарты","items":[
            {"name":"Geforce Gtx 1660", "cost":"899$","src":"https://hardprice.ru/images/g/product/2038/videokarta-msi-geforce-gtx-1660-ti-gaming-x-6gb-4.jpg"},
            {"name":"Nvidia Geforce Gtx 1660 super", "cost":"1055$","src":"https://www.ixbt.com/img/n1/news/2019/9/1/20191014015028652-740x555.jpg"},
            {"name":"Gigabyte Nvidia Rtx 2060", "cost":"939$","src":"https://items.s1.citilink.ru/1118883_v01_b.jpg"},
            {"name":"Gigabyte NVIDIA GeForce GTX 10", "cost":"1040$","src":"https://cdn1.ozone.ru/multimedia/1021677360.jpg"}
        ]},
        {"name":"Материнские Платы","items":[
            {"name":"GIGABYTE H410M S2H", "cost":"325$","src":"https://m.onlinetrade.ru/img/items/m/materinskaya_plata_gigabyte_h410m_s2h_lga1200_matx__1389564_1.jpg"},
            {"name":"MSI MAG B550M MORTAR", "cost":"109$","src":"https://betechno.ru/upload/iblock/e83/e8364235aab0acf808f5b0099b39448b.png"},
            {"name":"ASUS PRIME Z490-P", "cost":"799$","src":"https://static.onlinetrade.ru/img/items/m/asus_prime_z490_p_lga1200_atx__1350989_3.jpg"},
            {"name":"Gigabyte Z490 UD", "cost":"530$","src":"https://hardprice.ru/images/p/2/2yux86.jpg"}
        ]},
        {"name":"Оперативная Память","items":[
            {"name":"Kingston DDR4 8Gb", "cost":"299$","src":"https://www.onlinetrade.ru/img/items/m/655210_1.jpg"},
            {"name":"Patriot Memory SL 8GB", "cost":"899$","src":"data:image/webp;base64,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"},
            {"name":"Kingston KVR16N11 8Gb", "cost":"905$","src":"https://img.oldi.ru/upload/resaiz_images_catalog/big/101/178086/178086_1.jpg"},
            {"name":"DDR4 G.SKILL 16Gb", "cost":"999$","src":"https://hardprice.ru/images/g/product/841/operativnaya-pamyat-ddr4-g-skill-16gb-3200-mgc-cl16-f4-3200c16d-16gtzr-gskill-1.jpg"}
        ]},
        {"name":"Куллеры","items":[
            {"name":"AEROCOOL Verkho 2", "cost":"89$","src":"https://items.s1.citilink.ru/1053598_v01_b.jpg"},
            {"name":"PCCooler GI-X5R RED", "cost":"239$","src":"https://m.onlinetrade.ru/img/items/m/kuler_dlya_protsessora_pccooler_gi_x5b_red_818634_1.jpg"},
            {"name":"Snowman M-T4", "cost":"299$","src":"https://cdn1.ozone.ru/s3/multimedia-x/c1200/6028161429.jpg"},
            {"name":"Cooler Master Hyper 212X", "cost":"199$","src":"https://img.mvideo.ru/Pdb/30032053b.jpg"}
        ]},
        {"name":"Блоки Питания","items":[
            {"name":"HIPER HPT-500 500W", "cost":"499$","src":"https://m.onlinetrade.ru/img/items/m/blok_pitaniya_hiper_hpt_500_500w_oem_1100283_1.jpg"},
            {"name":"ATX-UN350", "cost":"309$","src":"https://www.nix.ru/images/ExeGate-ATX-UN350-2163972254.jpg?good_id=216397&width=500&height=500&view_id=2254"},
            {"name":"Huntkey GS 550", "cost":"49$","src":"https://www.ixbt.com/power/psu/photos/huntkey/gs550/1000/psu_003.jpg"},
            {"name":"Deepcool DA700N Aurora 700W", "cost":"799$","src":"https://m.onlinetrade.ru/img/items/m/deepcool_da700n_aurora_700w_atx_bronze_566888_1.jpg"}
        ]},
        {"name":"Корпуса","items":[
            {"name":"Abkoncore", "cost":"29$","src":"https://c.dns-shop.ru/thumb/st1/fit/300/300/882d23a76efb497ad1427d14f211defa/ffc024985afd7c70b3ef27776d243e954055844abf0c50e7df754468598ebb57.jpg"},
            {"name":"Gamemax RockStar", "cost":"490$","src":"https://img.ktc.ua/img/base/1/6/252476.jpg"},
            {"name":"Raidmax Enigma", "cost":"1500$","src":"https://3dnews.ru/assets/external/illustrations/2018/09/05/974992/en1.jpg"},
            {"name":"ATX (WITH ARGB LINE)", "cost":"200$","src":"https://sc04.alicdn.com/kf/HTB1EFcwXPLuK1Rjy0Fhq6xpdFXam.jpg"}
        ]},
        {"name":"Накопители","items":[
            {"name":"SSD Crucial 2.5 240GB", "cost":"380$","src":"https://m.onlinetrade.ru/img/items/m/crucial_2.5_bx500_240_gb_sata_iii_3d_nand_ct240bx500ssd1__912107_3.jpg"},
            {"name":"SSD CRUCIAL BX500 240GB", "cost":"699$","src":"https://user-items.s1.citilink.ru/1084929_01_b.jpg"},
            {"name":"SSD Samsung T5 1Tb", "cost":"999$","src":"https://cdn.svyaznoy.ru/upload/iblock/527/ru-portable-ssd-t5-mu-pa2t0b-ww-lperspectiveblack-74645532.jpg/resize/483x483/hq/"},
            {"name":"HDD WD 2TB Purple", "cost":"800$","src":"https://img.mvideo.ru/Pdb/50120063b.jpg"}
        ]}
    ],
    //аксесуары
    [
        {"name":"Колонки","items":[
            {"name":"Oklick OK-166 2.0 BT", "cost":"39$","src":"https://m.onlinetrade.ru/img/items/m/oklick_ok_166_2.0_bt_besprovodnye_chernyy_40vt_1207371_1.jpg"},
            {"name":"SVEN 2.0 314", "cost":"99$","src":"https://c.dns-shop.ru/thumb/st1/fit/300/300/6ea8b2f9bfa94ebb4c84c138243dec61/02c8aca810d0558e40ab028c26010d5df4532d45d318f30cc2f6a14c6154d99d.jpg"},
            {"name":"JBL Quantum DUO", "cost":"9$","src":"https://img.mvideo.ru/Pdb/50134077b.jpg"},
            {"name":"SVEN MS-304, 2.1", "cost":"11$","src":"https://items.s1.citilink.ru/498209_v01_b.jpg"}
        ]},
        {"name":"Модемы","items":[
            {"name":"HUAWEI E3372h-320 3G/4G", "cost":"599$","src":"https://m.onlinetrade.ru/img/items/m/modem_2g_3g_4g_huawei_e3372h_320_usb_router_vneshniy_chernyy_1375931_1.png"},
            {"name":"Huawei HUAWEI E5576-320 3G/4G", "cost":"699$","src":"https://static.onlinetrade.ru/img/items/b/modem_3g_4g_huawei_e5576_320_usb_wi_fi_firewall_router_vneshniy_belyy_1242994_1.png"},
            {"name":"Huawei E5573/MR150-3/8210FT", "cost":"399$","src":"https://belingo.ru/wp-content/uploads/2019/03/%D0%90%D0%B2%D1%82%D0%BE%D0%BD%D0%BE%D0%BC%D0%BD%D1%8B%D0%B9-Wi-Fi-%D0%BC%D0%BE%D0%B4%D0%B5%D0%BC-Huawei-E5573.jpg"},
            {"name":"Huawei E3372h-320 White", "cost":"199$","src":"https://telemarket24.ru/upload/resizer2/1/9ac/9ace1ce6956d49656199de2a5d172286.JPG"}
        ]},
        {"name":"Мониторы","items":[
            {"name":"Acer KG271Cbmidpx", "cost":"199$","src":"https://img.mvideo.ru/Pdb/30040211b.jpg"},
            {"name":"Philips 322E1C/00 32'' Black", "cost":"75$","src":"https://m.onlinetrade.ru/img/items/m/_monitor_32_philips_322e1c_00_black_1135575_1.jpg"},
            {"name":"DELL P2419H 23.8''", "cost":"499$","src":"https://avatars.mds.yandex.net/get-mpic/4721581/img_id8265510671428822642.jpeg/13hq"},
            {"name":"AOC C27V1Q", "cost":"149$","src":"https://mmd-aoc2.oss-cn-hongkong.aliyuncs.com/Products/Monitors/V%20Line/V1/C27V1Q/C27V1Q_F.png"}
        ]},
        {"name":"Клавиатуры","items":[
            {"name":"Red Square REDEEMER V2", "cost":"399$","src":"https://img.mvideo.ru/Pdb/50118387b.jpg"},
            {"name":"Red Square Oldschool V2 (RSQ-20012)", "cost":"279$","src":"https://img.mvideo.ru/Pdb/50118293b.jpg"},
            {"name":"Logitech K780 Multi-Device 920-008043", "cost":"109$","src":"https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQ-9Sd5TpRjh9lUVa_ZIm879zuraq_gBfToDvaWU8IXdW31LDCBC-xEXxWmXHI0Zz8AJMrruDKtkr3eZWarTq09YFmFGiKmUw8CrMTsYAVL_Wp4E7_XFmjaVYc&usqp=CAE"},
            {"name":"Apple Magic Keyboard", "cost":"777$","src":"http://manyphone.ru/upload/product/307/images/magic-keyboard.jpg"}
        ]},
        {"name":"Хабы","items":[
            {"name":"Konftel OCC Hub", "cost":"99$","src":"https://skomplekt.com/image/cache/files/product_1563191/main_img_p1563191-1900x1900origin.jpg"},
            {"name":"4-портовый usb-хаб 2.0", "cost":"120$","src":"https://cdn1.ozone.ru/s3/multimedia-f/c1200/6163074183.jpg"},
            {"name":"4-портовый адаптер-разветвитель", "cost":"99$","src":"https://cdn1.ozone.ru/s3/multimedia-l/c500/6032115441.jpg"},
            {"name":"Usb-концентратор, расширитель портов 3/6", "cost":"249$","src":"https://img.joomcdn.net/5bd22388d3a1d38fb8a25d37ccc423516dc3894e_original.jpeg"}
        ]}
    ],
    //сборки
    [
        {"name":"Сборки","items": [
            {"name":"IRU Home 313 (I3 10100 + GTX 1650)", "cost":"1800$","description":"Учитесь, работайте и развлекайтесь при помощи компьютера IRU Home 313 стильного черного цвета. Четырехъядерный процессор Intel Core I3 10100 с дискретным графическим контроллером NVIDIA GeForce GTX 1650 и 8 Гб оперативной памяти отвечают за высокую производительность компьютера. Вес в 7 кг упрощает транспортировку и эксплуатацию модели.", "src":"https://topcomputer.ru/upload/resize_cache/images/d6/1024_768_140cd750bba9870f18aada2478b24840a/d68bdf3b857d652f076b74903f8c8fc8.jpg"},
            {"name":"Сборка RYZEN 5 2600 + RX 570", "cost":"2099$","description":" Технические характеристики компьютера удовлетворят требования самых взыскательных пользователей. Выполнен он из прочных, долговечных материалов, в стильном дизайне и традиционном черном цвете, в корпусе типа small form factor. Обладает высокой производительностью за счет процессора RYZEN 5 2600, видеокарты RX 570 и оперативной памяти объемом 8 Гб.", "src":"https://www.eteknix.com/wp-content/uploads/2014/05/DSC_5908.jpg"},
            {"name":"Сборка I5 10400 + RTX 2060", "cost":"899$","description":" Технические характеристики компьютера удовлетворят требования самых взыскательных пользователей. Выполнен он из прочных, долговечных материалов, в стильном дизайне и традиционном черном цвете, в корпусе типа small form factor. Обладает высокой производительностью за счет шестиядерного процессора Intel Core I5 10400, видеокарты RTX 2060 и оперативной памяти объемом 8 Гб.", "src":"https://avatars.mds.yandex.net/get-zen_doc/44645/pub_5ffdd799f2385a3dfbac0f7b_5ffde0c0f2385a3dfbbeb2ec/scale_1200"},
            {"name":"IRU Game 525 (RYZEN 5 2600 + GTX 1660)", "cost":"1000$","description":" Процессор AMD RYZEN 5 2600 способствует мгновенному отклику на запросы и работе без задержек в многозадачном режиме. Имеются SSD накопитель объемом 240 Гб и жесткий диск на 1024 Гб. Вес в 7 кг упрощает транспортировку компьютера.", "src":"http://igralisk.ru/wp-content/uploads/2018/01/kak-sekonomit-na-sborke-kompyutera-01.jpg"},
            {"name":"Сбока I5 9600K + GTX 1660 TI", "cost":"4999$","description":" Весит рассматриваемое изделие 7 кг, а его габариты равны 210х520х404 мм. Корпус выполнен в универсальном и классическом черном цвете, что придает ему нейтральный и лаконичный внешний вид. Блок питания здесь внутренний, что экономит полезное пространство. Его мощность составляет 700 Вт.", "src":"https://i.pinimg.com/originals/25/db/5f/25db5fc09ac135470e8779d49770b54d.jpg"},
            {"name":"Сборка RYZEN 5 3600 + GTX 1660 TI", "cost":"279$","description":"При этом данное устройство обладает широким спектром возможностей для продуктивной рабочей деятельности и развлечений. Высокий уровень производительности достигается за счет процессора RYZEN 5 3600, видеокарты NVIDIA GeForce GTX 1660 TI и оперативной памяти объемом 8 Гб. Жесткий диск рассчитан на хранение данных объемом до 1000 Гб.", "src":"https://www.gavtrain.com/wp-content/uploads/2011/11/DSC_0265.jpg"},
            {"name":"Сборка I7 9700 + GTX 1660", "cost":"599$","description":"Устройство отличается высокой производительностью, что позволяет решать достаточно много сложных задач в течение дня. Модель имеет процессор Intel Core I7 9700, видеокарту GTX 1660 и оперативную память объемом 8 Гб. Наличие накопителей HDD на 1000 Гб и SSD на 256 Гб обеспечивает надежное хранение информации в одном месте.", "src":"https://pbs.twimg.com/media/CRD9embVEAAJ4yP.jpg"},
        ]}
    ]
];

let RandomDescriptions = [
    "очень хорошая вещь за свои деньги",
    "для работы подходит идеально",
    "работает без перебоев",
    "сделанно качественно",
    "хорошие материалы",
    "гарантия 36 месяцев",
    "прямо с завода",
    "очень удобно для игр",
    "лучший товар в этой сфере",
    "покупатели очень довольны"
];

let recommendations = [];
let inventory = [];

function Random(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
}

function SaveInventory() {
    localStorage.setItem("inventory",JSON.stringify(inventory));
}

function LoadInventory() {
    var pre_inventory = localStorage.getItem("inventory");
    if(pre_inventory == null || pre_inventory == undefined) return;
    inventory = JSON.parse(pre_inventory);
}

function ClearInventory() {
    inventory = [];
    localStorage.removeItem("inventory");
}

function GetGroupByName(name) {
    for(var a = 0; a < items.length;a+=1) {
        for(var b = 0; b < items[a].length;b+=1) {
            if(items[a][b].name == name) return items[a][b];
        }
    }
    return null;
}

function GetItemByName(name) {
    for(var a = 0; a < items.length;a+=1)
        for(var b = 0; b < items[a].length;b+=1)
            for(var c = 0; c<items[a][b].items.length;c+=1)
                if(items[a][b].items[c].name == name) return items[a][b].items[c]
    return null;
}

function RandomDescription() {
    var count = Random(2, 4);
    var pre_output = [];

    for(var a = 0; a < count;a+=1) {
        while(true) {
            var word = RandomDescriptions[Random(0,RandomDescriptions.length - 1)];
            if(pre_output.includes(word) == false) {
                pre_output.push(word);
                break;
            }
        }
    }

    var output = "";

    for(var a = 0; a < pre_output.length;a+=1) {
        output += pre_output[a];
        output += a + 1 == pre_output.length? "." : (a+2 == pre_output.length? " и " : ", ");
    }

    return output[0].toUpperCase() + output.slice(1,output.length);
}

function OpenItem(clicked) {
    var ids = clicked.id.split('-');
    var item = GetGroupByName(ids[0]).items[parseInt(ids[1])];

    Toggle(true);
    ShowContent("item-info");
    document.querySelector(".II-img").src = item.src;
    document.querySelector(".II-description").textContent = item.description == undefined? RandomDescription() : item.description;
    document.querySelector(".II-name").textContent = item.name;
    document.querySelector(".II-tocartbutton").onclick = function() {
        if(!opened) return;
        inventory.push(item.name);
        SaveInventory();
        Alert("Товар добавлен в корзину!");
        Toggle(false);
    };
}

function GetItemHTML(item,group) {
    var html = '<div class="item" id="' +group.name + '-' + group.items.indexOf(item) +'" onclick="OpenItem(this)">' +
    '<img src="' +item.src +'">' +
    '<h1>' +item.name +'</h1>' +
    '<h2>' + item.cost+'</h2>';
    return html;
}

function FillOfItems(group,selector) {
    var container = document.querySelector(selector);

    for(var a = 0; a < group.items.length;a+=1)
        container.innerHTML += GetItemHTML(group.items[a],group);
}

function GetGroupHTML(group,count,withoutHeader) {
    return '<div class="itemGroup" id=ig' +count+'>' +
    (withoutHeader? "" : '<h1 class="groupHeader">' + group.name +'</h1>') +
    '<div class="grid" id="g' + count + '"></div>' +
    '</div>';
}

function GetRandomGroup() {
    var category = Random(0,1);
    return items[category][Random(0,items[category].length-1)];
}

function BuildRecommendations() {
    var count = Random(4,6);
    var totalCount = items[0].length + items[1].length;// + items[2].length;
    if(count > totalCount) count = totalCount;
    
    var holder = document.querySelector('.groupsHolder');

    for(var a = 0; a < count;a+=1) {
        while(true) {
            var randomlyGeneratedGroup = GetRandomGroup();
            if(recommendations.includes(randomlyGeneratedGroup) == false) {
                recommendations.push(randomlyGeneratedGroup);
                holder.innerHTML += GetGroupHTML(randomlyGeneratedGroup,a,false);
                FillOfItems(randomlyGeneratedGroup,"#g" + a);
                break;
            }
        }
    }
}

function BuildCategory(id) {
    var holder = document.querySelector('.groupsHolder');
    for(var a = 0; a < items[id].length;a+=1) {
        holder.innerHTML += GetGroupHTML(items[id][a],a,id==2);
        FillOfItems(items[id][a],"#g" + a);
    }
}

function UpdateCartGrid() {
    function GetCartItemHTML(item,count) {

        return '<div class="item" id="' + count +'">' +
            '<img src="' + item.src +'">' +
            '<h1>' + item.name +'</h1>' +
            '<h2>' + item.cost +'</h2>' +
            '<input type="button" class="button closebutton" value="x" onclick="RemoveItem(' + count +')">'
    }
    var inventoryGrid = document.querySelector(".CI-grid");
    inventoryGrid.innerHTML = "";

    if(inventory.length == 0) {
        inventoryGrid.innerHTML = '<h3 class="noelements">Нет предметов в корзине</h3>';
    }

    for(var a = 0; a < inventory.length;a+=1) 
        inventoryGrid.innerHTML += GetCartItemHTML(GetItemByName(inventory[a]),a);

}

function Pay() {
    Alert("У вас точно есть деньги?");
    Toggle(false);
}

function RemoveItem(id) {
    inventory.splice(id,1);
    SaveInventory();
    Alert("Удалено!");
    UpdateCartGrid();
}

document.querySelector(".cart").onclick = function() {
    Toggle(true);
    ShowContent("cart-interface");
    UpdateCartGrid();
};

LoadInventory();