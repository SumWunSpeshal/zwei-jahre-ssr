import { v2 } from 'cloudinary'

v2.config({
  cloud_name: import.meta.env.VITE_CLOUDINARY_NAME,
  api_key: import.meta.env.VITE_CLOUDINARY_API_KEY,
  api_secret: import.meta.env.VITE_CLOUDINARY_API_SECRET
})

export async function api() {
  return v2.search
    .expression('resource_type:image')
    .with_field('context')
    .max_results(100)
    .execute()
}
