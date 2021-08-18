import React from 'react';
import formHero from "../assets/image/Form-Hero-Image.jpg";
import Dashboard from "./Dashboard";
import Strip from "./Strip";
import '../assets/scss/elements/AddClothesHeader.scss'

const AddClothesHeader = () => {
    return (
        <>
            <main className='addClothes'>
                <div className='addClothes__Img'>
                    <img
                        src={formHero}
                        alt='clothes'

                    />
                </div>
                <section className='addClothes__NagBox'>
                    <Dashboard/>
                    <div className='addClothes__strip'>
                        <Strip
                            text='Oddaj rzeczy, których już nie chcesz'
                            txt='POTRZEBUJĄCYM'
                            textAdd='Wystarczą 4 proste kroki:'
                        />
                    </div>
                    <div className="addClothes__boxes">
                        <div className='assClothes__box'>
                            <h1>1</h1>
                            <p>Wybierz rzeczy</p>
                        </div>
                        <div className='assClothes__box'>
                            <h1>2</h1>
                            <p>Spakuj je w worki</p>
                        </div>
                        <div className='assClothes__box'>
                            <h1>3</h1>
                            <p>Wybierz fundację</p>
                        </div>
                        <div className='assClothes__box'>
                            <h1>4</h1>
                            <p>Zamów kuriera</p>
                        </div>
                    </div>
                    <div className='addClothes__Img2'>
                        <img
                            src={formHero}
                            alt='clothes'
                        />
                    </div>
                </section>
            </main>

        </>






    );
}

export default AddClothesHeader;