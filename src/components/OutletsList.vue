<template>
    <ol class="outlets-list" id="OutletsList" :outlets="outlets">
        <li v-for='(outlet, index) in outlets' :key='outlet.id' class="outlets-list__item">
            <span class="count">{{index}}</span>
            <p class="name">{{outlet['Name']}}</p>
            <p class="address">{{outlet['Street']}}</p>
        </li>
    </ol>
</template>
<script>


export default {
    name: 'OutletsList',
    data() {
        return {
            outlets: [{
                "id": 281474996574951,
                "Name": "ИП МИХАЙЛЕНКО АЛЕКСАНДР ЕВГЕНЬЕВ",
                "Street": "Г. КРАСНОКАМЕНСК; МКР. 5-Й; Д.508; ВЕСНА",
                "Latitude": 5005.7459,
                "Longitude": 11801.8784
            }, {
                "id": 281474996575049,
                "Name": "ИП ТУРАНОВА АЛЬБИНА СЕМЕНОВНА",
                "Street": "Г. КРАСНОКАМЕНСК; МКР.7; Д.6Ц; МПК; 4Ц",
                "Latitude": 5005.7025,
                "Longitude": 11802.5978
            }, {
                "id": 281474996575426,
                "Name": "ИП ВАСАЛАТИЙ АЛЕКСЕЙ ИВАНОВИЧ",
                "Street": "Г. КРАСНОКАМЕНСК; 1-Й МКР.; Д.117;",
                "Latitude": 5005.7868,
                "Longitude": 11802.1059
            }, {
                "id": 281474996575427,
                "Name": "ИП ВАСАЛАТИЙ АЛЕКСЕЙ ИВАНОВИЧ",
                "Street": "Г. КРАСНОКАМЕНСК; 6-Й МКР.; Д.630;",
                "Latitude": 5005.7792,
                "Longitude": 11802.4228
            }]
        }
    }
}
</script>

<style lang="scss">
.outlets-list{
    list-style: none;
    background: #dadada;
    margin: 0;
    padding: 32px 24px;
}

.outlets-list__item {
    position: relative;
    margin-bottom: 24px;
    text-align: left;
    padding-left: 64px;

    &:last-child {
        margin-bottom: 0;
    }

    .count {
        display: inline-block;
        width: 32px;
        height: 32px;
        background-color: #204969;
        color: #fff;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        top: 0;
        left: 0;
    }

    .name {
        margin-top: 0;
        font-size: 16px;
        line-height: 1;
        margin-bottom: 8px;
    }

    .address {
        text-transform: lowercase;
        margin: 0;
        font-size: 16px;
        color: lighten($color: #000000, $amount: 30%);
    }
}
</style>


