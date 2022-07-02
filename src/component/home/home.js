import React from 'react'
import * as s from './home.style'
import * as d from './home.data'
const Home = () => {
  const listbelt=d.belt.map((belt)=>{
    return(
      <s.belt>
        <s.img_belt src={belt.img} />
        <s.name_belt> 
          {belt.beltname}
        </s.name_belt>
      </s.belt>
    )
  })
  return (
    <s.main_container>
      <s.bio>
        <s.background src="https://the-martial-way.com/wp-content/uploads/2016/04/Fudo-dachi-Karate-1024x500.jpg"/>
        <s.image src="https://scontent.ftun16-1.fna.fbcdn.net/v/t39.30808-6/284377455_5370615056322408_1815830408197072157_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5cd70e&_nc_ohc=ffZoNYg4SzIAX-o56yW&_nc_ht=scontent.ftun16-1.fna&oh=00_AT_x8zQ7kVvAgZds_sAp8Eb2MnzcN_Q8MGf0LyeJ1dWQ4A&oe=62BBF738"> 
        </s.image>
        <s.bio_text>
          Sensei Khoubaib Team
        </s.bio_text>
      </s.bio>
      <s.kyokoshinkai>
        
          <s.kyo_title>
            <s.title>
              <h1> Kyokoshinkai</h1>
            </s.title>
            <s.kyo_text>
      <h2>Kyokushin Kaikan is the martial arts organization founded in 
      1964 by Korean-Japanese Masutatsu Oyama (大山倍達, Ōyama Masutatsu),
       officially the International Karate Organization. Previously,
        this institution was known as the Oyama Dojo. Since 1964, the style
         has continued to spread to more than 120 countries, becoming one of
          the largest martial arts organizations in the world, and in Japan itself.</h2>
          </s.kyo_text>
            <s.kyo_img src="https://upload.wikimedia.org/wikipedia/commons/4/46/Kyokushinkai.svg"/>
          </s.kyo_title>
      </s.kyokoshinkai>
      <s.belt_section>
        <s.title>
          <h1>Kyokushinkai Belts</h1>
        </s.title>
      {listbelt}
      </s.belt_section>
    </s.main_container>
  )
}

export default Home
