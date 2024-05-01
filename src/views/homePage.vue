<template>
    <div class="mainPageCard">
        <div class="container">
            <div class="wrapper">
                <div class="banner-image"></div>
                <h1 class="title text">Animal Kingdom</h1>
                <p class="cardInfo text">
                    Welcome to the Animal Kingdom! Lets go on an adventure and learn more about Animals you
                    may have missed.
                </p>
            </div>
            <div class="button-wrapper">
                <router-link :to="{ name: 'octopi' }" class="btn btnFill">
                    LET'S SEE AN OCTOPUS!
                </router-link>
            </div>
        </div>
    </div>
</template>

<style>
.mainPageCard {
    display: flex;
    justify-content: center;
}

.wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    flex-direction: column;
}

.container {
    backdrop-filter: blur(16px) saturate(180%);
    -webkit-backdrop-filter: blur(16px) saturate(180%);
    background-color: rgba(17, 25, 40, 0.5);
    border-radius: 12px;
    border: 1px solid rgba(255, 255, 255, 0.125);
    padding: 38px;
    filter: drop-shadow(0 30px 10px rgba(0, 0, 0, 0.384));
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 50%;
}

.wrapper {
    width: 100%;
    height: 100%;
}

.banner-image {
    background-image: url('../assets/animalGroup.png');
    background-position: center;
    background-size: cover;
    height: 30vh;
    width: 75%;
    border-radius: 12px;
    border: 1px solid rgba(255, 255, 255, 0.255);
}

.title {
    display: flex;
    justify-content: center;
    font-family: 'Righteous', sans-serif;
    color: rgb(255, 255, 255);
    text-transform: uppercase;
    font-size: 2.4rem;
}

.cardInfo {
    color: #ffffff;
    font-family: 'Lato', sans-serif;
    text-align: center;
    font-size: 1rem;
    line-height: 150%;
    letter-spacing: 2px;
    font-weight: 600;
    width: 75%;
}

.button-wrapper {
    margin-top: 18px;
}

.btn {
    border: none;
    padding: 12px 24px;
    border-radius: 24px;
    font-size: 12px;
    letter-spacing: 2px;
    cursor: pointer;
    background: rgba(255, 0, 76, 0.9);
    color: white;
    filter: drop-shadow(0);
    font-weight: bold;
    transition: all 0.3s ease;

}

.btn:link {
    text-decoration: none;
}

.btn:visited {
    text-decoration: none;
}

.btn:hover {
    text-decoration: none;
}

.btn:active {
    text-decoration: none;
}

.btnFill:hover {
    filter: drop-shadow(0 10px 5px rgba(255, 255, 255, 0.2));
    transition: all 0.3s ease;
}
</style>