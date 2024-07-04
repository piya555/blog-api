sed -i '' 's/app.use('\''\/api\/users'\'', userRoutes);/app.use('\''\/api\/users'\'', userRoutes);\
app.use('\''\/api\/categories'\'', categoryRoutes);\
app.use('\''\/api\/pages'\'', pageRoutes);\
app.use('\''\/api\/banners'\'', bannerRoutes);\
app.use('\''\/api\/comments'\'', commentRoutes);\
app.use('\''\/api\/menus'\'', menuRoutes);\
app.use('\''\/api\/tags'\'', tagRoutes);/' src/index.ts

sed -i '' 's/author: mongoose.Types.ObjectId;/author: mongoose.Types.ObjectId;\
  categories: mongoose.Types.ObjectId[];\
  tags: mongoose.Types.ObjectId[];/' src/models/Post.ts

sed -i '' 's/author: { type: Schema.Types.ObjectId, ref: '\''User'\'', required: true }/author: { type: Schema.Types.ObjectId, ref: '\''User'\'', required: true },\
  categories: [{ type: Schema.Types.ObjectId, ref: '\''Category'\'' }],\
  tags: [{ type: Schema.Types.ObjectId, ref: '\''Tag'\'' }]/' src/models/Post.ts

echo "All files have been created and updated successfully!"