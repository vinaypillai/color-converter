<template>
    <main :style="{backgroundColor:initColor.hex}" class="main-content">
        <ac-grid cols="12" md-cols="7" align-h="center">
            <ac-col cols="11" md-cols="4">
                <label :style="{color:textColor}">Hexcode</label>
                <input type="text" 
                    v-model.lazy.trim="currentColor.hex" 
                    placeholder="Hexcode" 
                    v-on:blur="updateColor('hex')">
            </ac-col>
            <ac-col cols="11" md-cols="4">
                <ac-grid cols="3">
                    <ac-col cols="1">
                        <label :style="{color:textColor}">R</label>
                        <input type="text" 
                            v-model.lazy.trim.number="currentColor.rgb[0]" 
                            placeholder="R" 
                            v-on:blur="updateColor('rgb')">
                    </ac-col>
                    <ac-col cols="1">
                        <label :style="{color:textColor}">G</label>
                        <input type="text" 
                            v-model.lazy.trim.number="currentColor.rgb[1]" 
                            placeholder="G" 
                            v-on:blur="updateColor('rgb')">
                    </ac-col>
                    <ac-col cols="1">
                        <label :style="{color:textColor}">B</label>
                        <input type="text" 
                            v-model.lazy.trim.number="currentColor.rgb[2]" 
                            placeholder="B" 
                            v-on:blur="updateColor('rgb')">
                    </ac-col>
                </ac-grid>
            </ac-col>
            <ac-col cols="11" md-cols="4">
                <ac-grid cols="3">
                    <ac-col cols="1">
                        <label :style="{color:textColor}">H</label>
                        <input type="text" 
                            v-model.lazy.trim.number="currentColor.hsl[0]" 
                            placeholder="H" 
                            v-on:blur="updateColor('hsl')">
                    </ac-col>
                    <ac-col cols="1">
                        <label :style="{color:textColor}">S</label>
                        <input type="text" 
                            v-model.lazy.trim.number="currentColor.hsl[1]" 
                            placeholder="S" 
                            v-on:blur="updateColor('hsl')">
                    </ac-col>
                    <ac-col cols="1">
                        <label :style="{color:textColor}">L</label>
                        <input type="text" 
                            v-model.lazy.trim.number="currentColor.hsl[2]" 
                            placeholder="L" 
                            v-on:blur="updateColor('hsl')">
                    </ac-col>
                </ac-grid>
            </ac-col>
            <ac-col cols="11" md-cols="4">
                <ac-grid cols="3">
                    <ac-col cols="1">
                        <label :style="{color:textColor}">L</label>
                        <input type="text" 
                            v-model.lazy.trim.number="currentColor.lab[0]" 
                            placeholder="L" 
                            v-on:blur="updateColor('lab')">
                    </ac-col>
                    <ac-col cols="1">
                        <label :style="{color:textColor}">A</label>
                        <input type="text" 
                            v-model.lazy.trim.number="currentColor.lab[1]" 
                            placeholder="A" 
                            v-on:blur="updateColor('lab')">
                    </ac-col>
                    <ac-col cols="1">
                        <label :style="{color:textColor}">B</label>
                        <input type="text" 
                            v-model.lazy.trim.number="currentColor.lab[2]" 
                            placeholder="B" 
                            v-on:blur="updateColor('lab')">
                    </ac-col>
                </ac-grid>
            </ac-col>
            <ac-col cols="11" md-cols="4">
                <ac-grid cols="3">
                    <ac-col cols="1">
                        <label :style="{color:textColor}">L</label>
                        <input type="text" 
                            v-model.lazy.trim.number="currentColor.lchab[0]" 
                            placeholder="L" 
                            v-on:blur="updateColor('lchab')">
                    </ac-col>
                    <ac-col cols="1">
                        <label :style="{color:textColor}">C</label>
                        <input type="text" 
                            v-model.lazy.trim.number="currentColor.lchab[1]" 
                            placeholder=C 
                            v-on:blur="updateColor('lchab')">
                    </ac-col>
                    <ac-col cols="1">
                        <label :style="{color:textColor}">H (ab)</label>
                        <input type="text" 
                            v-model.lazy.trim.number="currentColor.lchab[2]" 
                            placeholder="H" 
                            v-on:blur="updateColor('lchab')">
                    </ac-col>
                </ac-grid>
            </ac-col>
            <ac-col cols="11" md-cols="4">
                <ac-grid cols="3">
                    <ac-col cols="1">
                        <label :style="{color:textColor}">L</label>
                        <input type="text" 
                            v-model.lazy.trim.number="currentColor.luv[0]" 
                            placeholder="L" 
                            v-on:blur="updateColor('luv')">
                    </ac-col>
                    <ac-col cols="1">
                        <label :style="{color:textColor}">U</label>
                        <input type="text" 
                            v-model.lazy.trim.number="currentColor.luv[1]" 
                            placeholder="U" 
                            v-on:blur="updateColor('luv')">
                    </ac-col>
                    <ac-col cols="1">
                        <label :style="{color:textColor}">V</label>
                        <input type="text" 
                            v-model.lazy.trim.number="currentColor.luv[2]" 
                            placeholder="V" 
                            v-on:blur="updateColor('lab')">
                    </ac-col>
                </ac-grid>
            </ac-col>
            <ac-col cols="11" md-cols="4">
                <ac-grid cols="3">
                    <ac-col cols="1">
                        <label :style="{color:textColor}">L</label>
                        <input type="text" 
                            v-model.lazy.trim.number="currentColor.lchuv[0]" 
                            placeholder="L" 
                            v-on:blur="updateColor('lchuv')">
                    </ac-col>
                    <ac-col cols="1">
                        <label :style="{color:textColor}">C</label>
                        <input type="text" 
                            v-model.lazy.trim.number="currentColor.lchuv[1]" 
                            placeholder=C 
                            v-on:blur="updateColor('lchuv')">
                    </ac-col>
                    <ac-col cols="1">
                        <label :style="{color:textColor}">H (uv)</label>
                        <input type="text" 
                            v-model.lazy.trim.number="currentColor.lchuv[2]" 
                            placeholder="H" 
                            v-on:blur="updateColor('lchuv')">
                    </ac-col>
                </ac-grid>
            </ac-col>
        </ac-grid>
    </main>
</template>
<script type="text/javascript">
    import Color from 'ac-colors';
    export default {
        data(){
            return {
                defaultColor:"#FFFFFF",
                currentColor:{
                    "hex":"",
                    "rgb":[],
                    "lab":[],
                    "xyz":[],
                    "luv":[],
                    "lchuv":[],
                    "hsl":[],
                    "lchab":[],
                },
                initColor:null,
            }
        },
        beforeMount(){
            this.initColor = Color.random();
            this.updateCurrentColor();
        },
        methods:{
            updateColor(mode){
                this.initColor[mode] = this.currentColor[mode];
                console.log(this.initColor);
                this.updateCurrentColor();
            },
            updateCurrentColor(){
                this.currentColor.hex = this.initColor.hex;
                this.currentColor.rgb = [...this.initColor.rgb];
                this.currentColor.lab = [...this.initColor.lab];
                this.currentColor.xyz = [...this.initColor.xyz];
                this.currentColor.luv = [...this.initColor.luv];
                this.currentColor.lchuv = [...this.initColor.lchuv];
                this.currentColor.hsl = [...this.initColor.hsl];
                this.currentColor.lchab = [...this.initColor.lchab];
            }
        },
        computed:{
            textColor(){
                return Color.contrastTextColor(this.initColor.hex,'hex');
            }
        }
    }
</script>
<style lang="scss" scoped>
    .main-content{
        padding: 2%;
        box-sizing: border-box;
        background-image: url("../assets/ag-square.png");
        background-blend-mode: difference;
        align-content: center;
        display: flex;
    }
    label{
        margin: 1% 0 0.5% 0;
        font-weight: bold
    }
    input{
        margin: 0% auto 1.5% auto;
        width: 90%;
        text-align:center;
    }
</style>