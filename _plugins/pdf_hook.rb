Jekyll::Hooks.register :site, :post_write do |site|
  if site.config['serving']
    puts "Building PDF..."
    system("npm run pdf")
  end
end
