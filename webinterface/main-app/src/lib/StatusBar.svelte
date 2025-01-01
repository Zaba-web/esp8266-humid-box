<script>
    export let title
    export let range
    export let value
    export let status_ranges

    const min = range[0] || 0
    const max = range[1] || 0
    $: currentPercent = value / (max / 100)
    $: status = "BAD";
    $: updateStatus();

    function updateStatus() {
        // Stupid shit but it will do for now
        if (value >= status_ranges.BAD && value < status_ranges.OK) {
            status = "BAD";
        } else if (value >= status_ranges.OK && value < status_ranges.GOOD) {
            status = "OK";
        } else if (value >= status_ranges.GOOD && value < status_ranges.EXCESSIVE) {
            status = "GOOD";
        } else if (value >= status_ranges.EXCESSIVE) {
            status = "EXCESSIVE";
        }
    }
</script>

<div class="status-bar-wrapper">
    <div class="status-bar-text-container">
        <span>{title}</span>
        <span class={`status ${status}`}>{status}</span>
    </div>
    <div class="status-bar-container">
        <div class="status-bar" style={`width: ${currentPercent}%`}>
            <div class="numeric-value">{value}</div>
        </div>
    </div>
    <div class="status-bar-text-container">
        <span>{min}</span>
        <span>{max}</span>
    </div>
</div>

<style>
    .status-bar-wrapper {
        width: 100%;
        margin-top: 25px;
    }
    .status-bar-container {
        width: 100%;
        height: 19px;
        border: 3px dashed #fff;
    }
    .status-bar-text-container {
        width: 100%;
        display: flex;
        justify-content: space-between;
        padding: 5px 0px;
    }
    .status {
        text-align: right;
    }
    .status.GOOD {
        color: #00FF4D
    }
    .status.BAD {
        color: red
    }
    .status.EXCESSIVE {
        color: #800000;
    }
    .status.OK {
        color: orange
    }
    .status-bar {
        height: 100%;
        background-color: #fff;
        position: relative;
    }
    .numeric-value {
        position: absolute;
        right: -10px;
        top: 25px;
    }
</style>