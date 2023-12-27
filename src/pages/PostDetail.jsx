import React from 'react'
import { Link } from 'react-router-dom'
import PostAuthor from '../components/PostAuthor'
import Thumbnail from '../images/blog22.jpg'

const PostDetail = () => {
  return (
    <section className="post-detail">
      <div className="container post-detail__container">
        <div className="container post-detail__header">
          <PostAuthor/>
          <div className="post-detail__buttons">
            <Link to = {`/posts/werwer/edit`} className='btn sm primary'> Edit </Link>
            <Link to = {`/posts/werwer/delete`} className='btn sm danger'> Delete </Link>
          </div>
        </div>
        <h1>This is the post Title</h1>
        <div className="post-detail__thumbnail">
          <img src={Thumbnail} alt="" />
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est pariatur repellendus iure impedit voluptate aspernatur quaerat illum nulla itaque eos. Alias provident autem reiciendis quae earum quis explicabo at assumenda in voluptas iure porro, ipsum voluptatum, deserunt dolor. Itaque natus eum impedit molestias, sit quo expedita libero voluptatibus voluptates veritatis.</p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus consequuntur natus atque recusandae, tempore officia illo obcaecati velit id doloribus ducimus? Adipisci eius quia aut repellendus minima quae autem quibusdam, commodi molestiae debitis assumenda vitae ad aliquam, laborum explicabo deleniti dolorum voluptatibus beatae dicta eveniet! In inventore expedita quidem voluptas praesentium accusantium excepturi fugiat, iusto, quia necessitatibus esse illo nulla!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ipsa commodi quas neque quos maxime labore magnam molestiae? Nemo quas, porro perferendis repellat quidem reiciendis officiis ab praesentium voluptate ratione atque repudiandae fugiat. Delectus unde cumque alias exercitationem porro magni, harum laboriosam eveniet reprehenderit consequatur quae temporibus aut ab odit commodi laborum consequuntur? Optio ut quibusdam nobis molestias ducimus sunt similique, consequatur suscipit et pariatur earum mollitia possimus hic eligendi enim reiciendis nam excepturi. Repellendus, pariatur eos fuga eum quo, numquam dolore corrupti quod autem deleniti iure deserunt voluptates mollitia minima ipsam ex perspiciatis corporis saepe recusandae distinctio at? Consequuntur.
        </p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint, fugiat? Eum perspiciatis vitae nisi aliquid eveniet nesciunt, iusto sit porro enim quis reiciendis molestiae laborum obcaecati. Sequi, asperiores repudiandae. Rerum.</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi magni provident ex a quam quae saepe itaque accusantium repellat, modi rem porro eius enim dolor velit quo non. Dignissimos aspernatur modi debitis deserunt enim dolorem necessitatibus, id sed consectetur repudiandae dolor eligendi veritatis magnam perferendis, dolore praesentium autem! Natus velit ratione assumenda nisi. Repudiandae nesciunt consectetur amet accusamus, reiciendis earum laudantium soluta veniam odio ipsa possimus esse inventore quae ipsum a ea molestiae iure modi explicabo blanditiis atque cumque? Quos possimus magni ipsum. Ipsa animi, molestias accusamus consectetur, praesentium similique magni eum dicta rerum nisi, consequuntur voluptates dolorum nulla! Iusto iure quo, odit, iste officia vero ad hic delectus nostrum nam necessitatibus voluptatum totam cupiditate excepturi? Exercitationem dolores recusandae dolor error voluptatum quo at provident enim fugiat maiores rem eius ad, laborum consequatur cumque excepturi distinctio velit ex. Atque aut aliquid, laudantium voluptatibus laborum iste soluta, ipsam fuga numquam veritatis adipisci cupiditate enim, nulla tempore dolorem! Suscipit placeat facilis fugiat natus beatae soluta recusandae, minus amet? Blanditiis adipisci ex possimus exercitationem similique vitae autem ut magnam laudantium provident pariatur, aperiam veritatis eos, officia voluptatibus deleniti, tempora numquam nulla eligendi beatae rerum eaque quia! Eum a, asperiores itaque optio aliquam voluptas.</p>
      </div>
    </section>
  )
}

export default PostDetail