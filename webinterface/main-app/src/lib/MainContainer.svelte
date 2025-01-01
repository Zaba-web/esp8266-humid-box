<script>
    import StatusBar from "./StatusBar.svelte";
    import { getBoxName, getHumidity, getTemp } from "../client";

    let title = "SMART TEA BOX";
    let boxName = "BOX #1";
    $: temp = 0;
    $: humidity = 0;

    async function updateData() {
        boxName = await (await getBoxName()).text();
        temp = parseFloat(await (await getTemp()).text());
        humidity = parseFloat(await (await getHumidity()).text());
    }

    setInterval(() => {
        updateData()
    }, 2000);
</script>

<div class="main-container">
    <div class="heading">
        <h1>{title}</h1>
    </div>
    <div class="box-name">
        {boxName}
    </div>
    <div class="container">
        <StatusBar title="TEMPERATURE" range={[0, 50]} value={temp} status_ranges={
            {
                'GOOD': 22,
                'OK': 19,
                'BAD': 18,
                'EXCESSIVE': 32
            }
        }/>
        <StatusBar title="HUMIDITY" range={[0, 100]} value={humidity} status_ranges={
            {
                'GOOD': 65,
                'OK': 50,
                'BAD': 45,
                'EXCESSIVE': 82
            }
        }/>
    </div>
</div>

<style>
    .main-container {
        width: 626px;
        height: 352px;
        border: 3px dashed #fff;
        margin: auto auto;
        position: relative;
        z-index: 1;
        box-sizing: border-box;
        padding: 25px;
    }
    .container {
        margin-top: 25px;
    }
    .heading {
        position: absolute;
        left: 20px;
        top: -30px;
        background-color: #000;
        padding: 10px 15px;
        color: #fff;
    }
    .box-name{
        position: absolute;
        top: -30px;
        right: 0px;
        color: #fff;
    }
</style>