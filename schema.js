import mongoose, { Schema } from "mongoose";

//by default id is created in mongodb for each object getting stored in the every collection

const ProductCategorySchema = new Schema({
	name: String,
	desc: String,
	created_at: Date,
	modified_at: Date,
	deleted_at: Date,
});

//product category collection creation
export const ProductCategory = mongoose.model(
	"product_category",
	ProductCategorySchema
);

const ProductInventorySchema = new Schema({
	quantity: Number,
	created_at: Date,
	modified_at: Date,
	deleted_at: Date,
});

//product inventory collection creation
export const ProductInventory = mongoose.model(
	"product_inventory",
	ProductInventorySchema
);

const discountSchema = new Schema({
	name: String,
	desc: String,
	discount_percent: Number,
	active: Boolean,
	created_at: Date,
	modified_at: Date,
	deleted_at: Date,
});

//discount collection creation
export const discount = mongoose.model("discount", discountSchema);

const ProductSchema = new Schema({
	name: String,
	desc: String,
	SKU: String,
	category_id: { type: Schema.Types.ObjectId, ref: "product_category" },
	inventory_id: { type: Schema.Types.ObjectId, ref: "product_inventory" },
	price: Number,
	discount_id: { type: Schema.Types.ObjectId, ref: "discount" },
	created_at: Date,
	modified_at: Date,
	deleted_at: Date,
});

//products collection creation
export const Products = mongoose.model("Products", ProductSchema);
