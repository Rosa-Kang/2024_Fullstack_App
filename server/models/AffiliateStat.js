import mongoose, { Mongoose } from "mongoose";

const AffiliateStatSchema = new mongoose.Schema({
    userId: {type: mongoose.Types.ObjectId, ref: "User"},
    affiliateSales: {
        type: [mongoose.Types.ObjectId],
        ref: "Transaction"
    }
});

const AffiliateStat = mongoose.model("AffiliateStat", AffiliateStatSchema);
export default AffiliateStat;