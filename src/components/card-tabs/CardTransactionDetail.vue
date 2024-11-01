<template>
  <v-expansion-panels>
    <v-expansion-panel style="background-color: #f0f5ff">
      <v-expansion-panel-title>
        <template v-slot:default="{ expanded }">
          <v-row no-gutters>
            <v-col
              class="d-flex justify-start items-center"
              cols="4"
              style="color: #2684fc; gap: 8px">
              <v-icon>mdi-view-grid</v-icon>
              <span> Card details </span>
            </v-col>
          </v-row>
        </template>
      </v-expansion-panel-title>
      <v-expansion-panel-text>
        <!-- content -->
      </v-expansion-panel-text>
    </v-expansion-panel>

    <v-expansion-panel style="background-color: #f0f5ff">
      <v-expansion-panel-title v-slot="{ expanded }">
        <v-row no-gutters>
          <v-col
            class="d-flex justify-start items-center"
            cols="4"
            style="color: #2684fc; gap: 8px">
            <v-icon>mdi-swap-horizontal</v-icon>
            <span> Today's transactions </span>
          </v-col>
        </v-row>
      </v-expansion-panel-title>
      <v-expansion-panel-text style="background-color: white">
        <v-list>
          <v-list-item
            v-for="(transaction, index) in props.transactions"
            class="here"
            :key="index">
            <div style="display: flex; gap: 8px">
              <v-icon
                color="primary"
                style="
                  background-color: #f0f5ff;
                  padding: 24px;
                  border-radius: 50%;
                "
                >{{
                  transaction.isDebit
                    ? "mdi-arrow-down-bold"
                    : "mdi-arrow-up-bold"
                }}</v-icon
              >
              <div
                style="
                  display: flex;
                  justify-content: space-between;
                  width: -webkit-fill-available;
                ">
                <div class="wrasfasf">
                  <div>
                    <v-list-item-title>{{
                      transaction.description
                    }}</v-list-item-title>

                    <v-list-item-subtitle>
                      {{ transaction.date }}
                    </v-list-item-subtitle>
                  </div>
                  {{ transaction.details }}
                </div>
                <div
                  :style="{
                    color: transaction.isDebit ? 'red' : 'green',
                  }">
                  {{ transaction.amount }}$
                </div>
              </div>
            </div>
          </v-list-item>
        </v-list>
      </v-expansion-panel-text>
    </v-expansion-panel>
  </v-expansion-panels>
</template>
<script setup lang="ts">
import { defineProps } from "vue";
const props = defineProps(["transactions"]);
</script>
<style lang="scss"></style>
