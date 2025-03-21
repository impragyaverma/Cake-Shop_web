import Order from "../models/order.js";
import Cake from "../models/cake.js";

export const getRecommendations = async (req, res) => {
  try {
    const userId = req.user.id;
    const userOrders = await Order.find({ user: userId });

    let orderedCakeIds = userOrders.flatMap(order => order.items.map(item => item.cakeId));
    let recommendedCakes = await Cake.find({ _id: { $nin: orderedCakeIds } }).limit(5);

    res.status(200).json({ success: true, recommendedCakes });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server Error" });
  }
};
