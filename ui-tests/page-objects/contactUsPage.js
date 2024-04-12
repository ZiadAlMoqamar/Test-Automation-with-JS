const elements = {
    inputFieldEmail: '#email',
    formFieldMessage: '#message',
    btnSubmitMessage: '#submitMessage',
    divErrorAlert: '.alert.alert-danger',
};
const commands = [
    {
        enterEmail(email) {
            return this.setValue('@inputFieldEmail', email);
        },
    },
    {
        enterMessage(message){
            return this.setValue('@formFieldMessage',message);
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
