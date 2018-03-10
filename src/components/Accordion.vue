<template>
    <div>
        <div class="col-12" v-for="(value, key) in items" v-bind:key="key">
            <div >
            <div class="card">
                <div class="card-header">
                <h5 class="mb-0">
                    <a href="#" class="sssTitle" v-on:click.prevent="selectItem(key)">
                        {{value.title}} 
                    </a>
                </h5>
                </div>
                <div :class="{'collapse': true, 'show': selectedItem === key}" >
                <div class="card-body">
                    {{value.content}}

                    <ul v-if="value.subContent" v-for="(subContent, subContentKey) in value.subContents" v-bind:key="subContentKey" class="pt-2">
                        <li>{{subContent}}</li>
                    </ul>

                    <a :href="value.link" target="_blank" v-if="value.link" class="pt-2">
                        {{value.link}}
                    </a>

                </div>
                </div>
            </div>
            </div>                    
        </div>
    </div>
</template>

<script>
export default {
  props: ["items"],
  data() {
    return {
      selectedItem: 0
    };
  },
  methods: {
    selectItem: function(selectedId) {
      if (this.selectedItem == selectedId) {
        this.selectedItem = -1;
      } else {
        this.selectedItem = selectedId;
      }
    }
  }
};
</script>

