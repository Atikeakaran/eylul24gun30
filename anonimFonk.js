
// ismi olmayan fonksiyon
function gulucukle(str) {
    return str + " :)";
}
/* 
let ad = "betül";
let gulenAd = gulucukle(ad);
 */

// callback fonksiyon
function yazdir(metin, donusturucu) {
    metin = donusturucu(metin);
    console.log(metin);
}
//yazdir("sakin olun", ???)
yazdir("sakin ol", gulucukle);

//anonim fonksiyon değişkende saklayarak ( saklanmazsa değişken kaybolur!)
const buyutucu = function (x) {
    return x.toLocaleUpperCase();
};

yazdir("tarhana corbası", buyutucu);

//Anonim fonksiyonla 
yazdir("me before you", function (str) {
    return str.split("").join("-");
});

// split ["m", "e"] yapar join "m e " yapar

// anonim arrow function ile
yazdir("bizim okulun orada dağıtılan lokum", x => x.length);
yazdir("afyonkarahisarlılaştıramadıklarımızdan mıymışsınız", x => x.length);
yazdir("Muvaffakiyetsizleştiricileştiriveremeyebileceklerimizdenmişsinizcesine", x => x.length);

function uckere(str) {
    //return str + str + str;
    return str.repeat(3);

}

yazdir("7", uckere);


yazdir ("oley! ", x=> x.repeat(3));

//sondaki derste callback fonksiyonlara sık sık rastlayacağız
//örnek

const unluler = ["drake", "rihanna", "zayn", "adele"];
const dizi2 = unluler.map(x=> x.toUpperCase());

console.log(unluler);
console.log(dizi2);