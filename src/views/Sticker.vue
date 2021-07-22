<template>
  <div>
    <h3>Транспортная Наклейка</h3>
    <Button label="Подсказки" class="p-button-info" />
    <hr />

    <div class="p-grid">
      <div class="p-col-12 p-md-12 p-lg-6">
        <h3>Получатель</h3>
        <div v-if="stRecipientInfo != ''">
          <label for="stRecipientInfo">stRecipientInfo</label>
          <Textarea
            id="stRecipientInfo"
            v-model="stRecipientInfo"
            :autoResize="true"
            rows="2"
            class="textarea-width-100"
          />
          <hr />
        </div>

        <div>
          <div>
            <label for="stRecipientName">stRecipientName</label>
            <Textarea
              id="stRecipientName"
              v-model="sticker.stRecipient.stRecipientName"
              :autoResize="true"
              rows="2"
              class="textarea-width-100"
            />
          </div>
          <div>
            <label for="stRecipientINN">stRecipientINN</label>
            <Textarea
              id="stRecipientINN"
              v-model="sticker.stRecipient.stRecipientINN"
              :autoResize="true"
              rows="2"
              class="textarea-width-100"
            />
          </div>
          <div>
            <label for="stRecipientAddress">stRecipientAddress</label>
            <Textarea
              id="stRecipientAddress"
              v-model="sticker.stRecipient.stRecipientAddress"
              :autoResize="true"
              rows="2"
              class="textarea-width-100"
            />
          </div>
          <div>
            <label for="stRecipientContacts">stRecipientContacts</label>
            <Textarea
              id="stRecipientContacts"
              v-model="sticker.stRecipient.stRecipientContacts"
              :autoResize="true"
              rows="2"
              class="textarea-width-100"
            />
          </div>
        </div>
        <hr />
        <div>
          <label for="stSenderComment">stSenderComment</label>
          <Textarea
            id="stSenderComment"
            v-model="sticker.stSender.stSenderComment"
            :autoResize="true"
            rows="2"
            class="textarea-width-100"
          />
          <label for="stSenderCommentLast">stSenderCommentLast</label>
          <InputText
            id="stSenderCommentLast"
            type="text"
            v-model="sticker.stSender.stSenderCommentLast"
          />
          <Button label="Доб / Изм комментарий" class="p-button-info" />
        </div>

        <hr />
      </div>
      <div class="p-col-12 p-md-12 p-lg-6">
        <h3>Отправитель</h3>
        <div>
          <div>Заполнить из ...</div>

          <Button label="Из текущ Акта" class="p-button-info p-mr-2" />
          <Button label="Из Шаблона" class="p-button-info" />
          <div>
            <label for="stSenderName">stSenderName</label>
            <Textarea
              id="stSenderName"
              v-model="sticker.stSender.stSenderName"
              :autoResize="true"
              rows="2"
              class="textarea-width-100"
            />
          </div>
          <div>
            <label for="stSenderINN">stSenderINN</label>
            <Textarea
              id="stSenderINN"
              v-model="sticker.stSender.stSenderINN"
              :autoResize="true"
              rows="2"
              class="textarea-width-100"
            />
          </div>
          <div>
            <label for="stSenderAddress">stSenderAddress</label>
            <Textarea
              id="stSenderAddress"
              v-model="sticker.stSender.stSenderAddress"
              :autoResize="true"
              rows="2"
              class="textarea-width-100"
            />
          </div>
          <div>
            <label for="stSenderContacts">stSenderContacts</label>
            <Textarea
              id="stSenderContacts"
              v-model="sticker.stSender.stSenderContacts"
              :autoResize="true"
              rows="2"
              class="textarea-width-100"
            />
          </div>
          <div>
            <label for="stSenderTarget">stSenderTarget</label>
            <Textarea
              id="stSenderTarget"
              v-model="sticker.stSender.stSenderTarget"
              :autoResize="true"
              rows="2"
              class="textarea-width-100"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import sticker from "../assets/modules/sticker_4.0.js";

export default {
  name: "Sticker",
  setup() {
    return { sticker };
  },
};
</script>