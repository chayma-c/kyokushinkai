import {Socketcontext} from "../../setting/context"
import {useContext} from "react"
const anglais={biopart:{coachname:"Sensei Khoubaib Team"},belt:[
    {beltname:"white",img:"https://www.nicepng.com/png/full/397-3976944_karate-white-belt.png", adress :"belt/white"},
    {beltname:"orange",img:"https://www.clipartmax.com/png/full/422-4223141_bjj-orange-belt-karate-orange-belt-clipart.png", adress :"belt/orange"},
    {beltname:"blue",img:"https://www.clipartmax.com/png/full/124-1241153_bournemouth-mixed-martial-arts-star-brings-home-bronze-blue-belt-bjj.png", adress :"belt/blue"},
    {beltname:"yellow",img:"https://www.clipartmax.com/png/full/63-634440_teaching-tips-tricks-yellow-belt.png", adress :"belt/yellow"},
    {beltname:"green",img:"https://www.clipartmax.com/png/full/230-2305203_judo-belt-clipart-4-by-robert-martial-arts-green-belt.png", adress :"belt/green"},
    {beltname:"brown",img:"https://www.clipartmax.com/png/full/138-1380949_3rd-kyu-3rd-class-brown-belt-martial-arts-academy-rh-brown-belt.png", adress :"belt/brown"},
    {beltname:"black",img:"https://www.nicepng.com/png/full/80-801107_black-belt-martial-arts-art-students-black-belt.png", adress :"belt/white"}],
    beltitle:"Kyokushinkai Belts",text:"Kyokushin Kaikan is the martial arts organization founded in 1964 by Korean-Japanese Masutatsu Oyama (大山倍達, Ōyama Masutatsu), officially the International Karate Organization. Previously this institution was known as the Oyama Dojo. Since 1964, the style has continued to spread to more than 120 countries, becoming one of the largest martial arts organizations in the world, and in Japan itself."

}
const français={biopart:{coachname:"Equipe Sensei Khoubaib"},
     belt:[
        {beltname:"ceinture blanche",img:"https://www.nicepng.com/png/full/397-3976944_karate-white-belt.png", adress :"belt/white"},
        {beltname:"ceinture orange",img:"https://www.clipartmax.com/png/full/422-4223141_bjj-orange-belt-karate-orange-belt-clipart.png", adress :"belt/orange"},
        {beltname:"ceinture bleue",img:"https://www.clipartmax.com/png/full/124-1241153_bournemouth-mixed-martial-arts-star-brings-home-bronze-blue-belt-bjj.png", adress :"belt/blue"},
        {beltname:"ceinture jaune",img:"https://www.clipartmax.com/png/full/63-634440_teaching-tips-tricks-yellow-belt.png", adress :"belt/yellow"},
        {beltname:"ceinture verte",img:"https://www.clipartmax.com/png/full/230-2305203_judo-belt-clipart-4-by-robert-martial-arts-green-belt.png", adress :"belt/green"},
        {beltname:"ceinture marron",img:"https://www.clipartmax.com/png/full/138-1380949_3rd-kyu-3rd-class-brown-belt-martial-arts-academy-rh-brown-belt.png", adress :"belt/brown"},
        {beltname:"ceinture noire",img:"https://www.nicepng.com/png/full/80-801107_black-belt-martial-arts-art-students-black-belt.png", adress :"belt/white"}],
        beltitle:"les ceintures du Kyokushinkai",text:"Kyokushin Kaikan est l'organisation d'arts martiaux fondée en 1964 par le coréen-japonais Masutatsu Oyama (大山倍達, Ōyama Masutatsu) officiellement l Organisation Internationale de Karaté. Précédemment cette institution était connue sous le nom de Oyama Dojo. Depuis 1964, le style a continué à se répandre dans plus de 120 pays, devenant l un des les plus grandes organisations d arts martiaux au monde et au Japon même."
}
const arabe ={biopart:{coachname:"فريق سنساي خبيب"},
     belt:[
        {beltname:"حزام البيض",img:"https://www.nicepng.com/png/full/397-3976944_karate-white-belt.png", adress :"belt/white"},
        {beltname:"حزام بتقالي",img:"https://www.clipartmax.com/png/full/422-4223141_bjj-orange-belt-karate-orange-belt-clipart.png", adress :"belt/orange"},
        {beltname:"حزام أزرق",img:"https://www.clipartmax.com/png/full/124-1241153_bournemouth-mixed-martial-arts-star-brings-home-bronze-blue-belt-bjj.png", adress :"belt/blue"},
        {beltname:"أصفر",img:"https://www.clipartmax.com/png/full/63-634440_teaching-tips-tricks-yellow-belt.png", adress :"belt/yellow"},
        {beltname:"أخضر",img:"https://www.clipartmax.com/png/full/230-2305203_judo-belt-clipart-4-by-robert-martial-arts-green-belt.png", adress :"belt/green"},
        {beltname:"بني",img:"https://www.clipartmax.com/png/full/138-1380949_3rd-kyu-3rd-class-brown-belt-martial-arts-academy-rh-brown-belt.png", adress :"belt/brown"},
        {beltname:"اسود",img:"https://www.nicepng.com/png/full/80-801107_black-belt-martial-arts-art-students-black-belt.png", adress :"belt/white"}],
        beltitle:"أحزمة الكوكوشينكاي",text:"كيوكوشن كايكان هي منظمة فنون الدفاع عن النفس التي تأسست في 1964 من قبل الكوري الياباني ماسوتاتسو وياما (大 山 倍 達 ) رسميا المنظمة الدولية للكاراتيه. سابقًا كانت هذه المؤسسة تُعرف باسم Oyama Dojo منذ عام 1964  استمرت هذه الرياضة في الانتشار إلى أكثر من 120 دولة   لتصبح واحدة من أكبر منظمات فنون الدفاع عن النفس في العالم   وفي اليابان نفسها"
     }
const Data = () =>{
    const {language} = useContext(Socketcontext)
    if(language === "anglais"){
        return anglais
    }
    else if (language === "arabe") {
        return arabe
        
    }
    else {
        return français
    }
    }
    export default Data ;
    