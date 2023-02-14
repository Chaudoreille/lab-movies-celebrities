//  Add your code here
const celebritySchema = new mongoose.Schema({
    name: String,
    occupation: {
        type: String,
        default: "unknown",
    },
    catchPhrase: String,
});

export const Celebrity = mongoose.model("Celebrity", celebritySchema);
