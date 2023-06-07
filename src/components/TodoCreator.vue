<script setup>

</script>


<template>
    <div class="input-wrap">
        <input type="text">
        <button>Create</button>
    </div>
</template>



<style lang="scss" scoped>
    .input-wrap {
        border: 2px solid #41b080;
        display: flex;
        justify-content: space-between;
        transition: 250ms ease;

        &:focus-within {
            box-shadow: 0 -4px 6px -1px rgb(0 0 0 / 0.1),
            0 -2px 4px -2px rgb(0 0 0 / 0.1);
        }

        input {
            border: none;
            width: 100%;
            padding: 8px 6px;

            &:focus {
                outline: none;
            }
        }

        button {
            padding: 8px 16px;
            border: none;
            cursor: pointer;
        }
    }
</style>