import {
    reactive
} from 'vue'

const sticker = reactive ({
    
    stCheckSum: "",

    stRecipient: {
        stRecipientName: "",
        stRecipientINN: "",
        stRecipientAddress: "",
        actRecipientContact: ""
    },

    stSender: {        
        stSenderName: "",
        stSenderINN: "",
        stSenderAddress: "",
        stSenderContact: ""
    },

    purposeOfCargo: "",

    stSenderComment: {
        stSenderCommentText: "",
        stSenderCommentLast: ""
    }
});

export default sticker;