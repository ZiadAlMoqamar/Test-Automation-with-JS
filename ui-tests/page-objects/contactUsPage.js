const elements = {
    inputFieldEmail: '#email',
    inputFieldFileUpload: '#fileUpload',
    selectorSubject: '#id_contact',
    descTitleCustomerService: '#desc_contact2',
    descTitleWebmaster: '#desc_contact1',
    formFieldMessage: '#message',
    formFieldOrderReference: '#id_order',
    btnSubmitMessage: '#submitMessage',
    divErrorAlert: '.alert.alert-danger',
    divSuccessAlert: '.alert.alert-success',
};
const commands = [
    {
        enterEmail(email) {
            return this.setValue('@inputFieldEmail', email);
        },
    },
    {
        enterMessage(message) {
            return this.setValue('@formFieldMessage', message);
        }
    },
    {
        chooseSubject(subject) {
            return this.setValue('@selectorSubject', subject);
        }
    },
    {
        enterOrderReference(orderReference) {
            return this.setValue('@formFieldOrderReference', orderReference);
        }
    },
    {
        AttachFile(enteredPath) {
            const path = require('path');
            const filePath = path.resolve(__dirname, enteredPath);
            return this.setValue('@inputFieldFileUpload', filePath);
        }
    },
    {
        submitMessage() {
            return this.click('@btnSubmitMessage');
        },
    },
];
module.exports = {
    elements: elements,
    commands: commands,
};
