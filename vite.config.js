export default defineConfig({
  plugins: [react()],
  // xử lý add file định dạng .zip , .exe
  assetsInclude: ['**/*.zip', '**/*.exe'],
  resolve: {
    // thay thế đường dẫn từ tuyệt đối sang tương đối, kết hợp cùng file .jsconfig.cjs
    // ví dụ file ở thư mục assets
    // tuyệt đối: ../../assert/file
    // tương đối: assert/file
    alias: {
      components: path.resolve(__dirname, 'src/components/'),
      assets: path.resolve(__dirname, 'src/assets/')
    }
  }
})
