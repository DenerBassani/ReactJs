import React from 'react';
const Hero = () => {
    return (
        <div id="hero" class="container-fluid">
                <div class="container">
                    <div class="row" id="hero_infos">
                        <div class="col-6">
                            <img class="logo" src={require('../../assets/diabo-de-cada-dia.png').default} />
                            <h1 class="text-white">
                                <img src={require('../../assets/badge-top-10.png').default} />Top 1 de hoje no Brasil.
                            </h1>
                            <p class="text-white">
                                Pregadores Profanos. Autoridades Corruptas. Amantes Assassinos.
                                Numa cidade cheia de pecadores, um jovem busca justiça.
                            </p>
                            <br />
                            <button class="btn btn-lg btn-custom-white">
                                <span class="mdi mdi-play"></span> Assistir
                            </button>
                            <button class="btn btn-lg btn-custom-translucent">
                                <span class="mdi mdi-information-outline"></span> Mais Informações
                            </button>
                        </div>
                    </div>
                </div>
            </div>

    )
}
export default Hero;