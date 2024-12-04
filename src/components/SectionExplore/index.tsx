import style from "./style.module.css";

export const Explore = () => {
  return (
    <section className={style.section}>
        <div className={style.conteiner}>
            <a href="">Explore the Word 🌏</a>
            <div className={style.principalText}>
                <p >Journy to create the best memories across the global 
                    <span> Explore</span>, <span>Discover</span>, 
                    and cherish every moment! 🚀
                </p>
            </div>

            <p className={style.textThw}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias, nesciunt dolore.
                Et nesciunt unde distinctio consectetur sequi! Eveniet consectetur
                enim natus mollitia, aliquid autem? Voluptatibus cumque laboriosam
                atque mollitia provident?
            </p>

            <div>
                <span>Local / data </span>
            </div>
        </div>
    
        <aside>
            <img src="/ribeiro.png" alt="" />
        </aside>
    </section>
  )
}
