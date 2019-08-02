<template>
    <ol class="outlets-list" id="OutletsList" :outlets="outlets">
        <li 
            v-for='(outlet, index) in outlets' 
            :key='outlet.id' 
            @click="move(outlet.coords)"
            class="outlets-list__item">
                <span class="count">{{index + 1}}</span>
                <p class="name">{{outlet.name}}</p>
                <p class="address">{{outlet.address}}</p>
        </li>
    </ol>
</template>

<script>
export default {
    name: 'OutletsList',
    props: ['outlets', 'center'],
    methods: {
        move(coord) {
            this.$store.commit('moveCenter', coords);
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
    cursor: pointer;

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
        transition: all 300ms ease-out;
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

    &:hover {
        .count {
            background-color: invert(#204969);
            color: invert(#fff);
        }
    }
}
</style>


