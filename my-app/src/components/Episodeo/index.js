import React from 'react';
const Episodeo = () => {
    return (
        <li>
            <div class="row">
                <div class="col-1 my-auto text-center">
                    <h3 class="text-white">1</h3>
                </div>
                <div class="col-4">
                    <img class="img-fluid" src={require('../../assets/capa-filme.png').default} />
                </div>
                <div class="col-7">
                    <h6 class="text-white">Nome do episódeo</h6>
                    <p class="text-muted">
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration
                        in some form, by injected humour.
                    </p>
                </div>
            </div>
        </li>
    )
}

export default Episodeo;