import React from 'react';

/**
 * OptimizedImage Component
 * 
 * Automatically uses WebP format with fallback to optimized PNG/JPG
 * Supports responsive images with srcSet
 * Falls back to regular img for remote URLs
 * 
 * @param {string} src - Image source path (with or without extension)
 * @param {string} alt - Alt text
 * @param {number} width - Image width
 * @param {number} height - Image height
 * @param {string} className - CSS classes
 * @param {string} sizes - Responsive sizes attribute
 * @param {boolean} priority - Whether to load with priority
 * @param {string} loading - Loading strategy ('lazy' or 'eager')
 */
const OptimizedImage = ({
  src,
  alt,
  width,
  height,
  className = '',
  sizes,
  priority = false,
  loading = 'lazy',
  ...props
}) => {
  // Check if it's a remote URL
  const isRemote = src.startsWith('http://') || src.startsWith('https://');
  
  // If remote, use regular img tag
  if (isRemote) {
    return (
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={className}
        loading={priority ? 'eager' : loading}
        decoding="async"
        {...props}
      />
    );
  }

  // Remove extension from src if present
  const baseSrc = src.replace(/\.(png|jpg|jpeg|webp)$/i, '');
  
  // Determine if we should use responsive sizes
  const useResponsive = sizes && (width > 500 || height > 500);
  
  // Build srcSet for responsive images
  const webpSrcSet = useResponsive
    ? `${baseSrc}-400w.webp 400w, ${baseSrc}-800w.webp 800w, ${baseSrc}-1200w.webp 1200w`
    : undefined;
  
  const fallbackSrcSet = useResponsive
    ? `${baseSrc}-400w${getExtension(src)} 400w, ${baseSrc}-800w${getExtension(src)} 800w, ${baseSrc}-1200w${getExtension(src)} 1200w`
    : undefined;

  // Default sizes if not provided
  const defaultSizes = sizes || `(max-width: 640px) 400px, (max-width: 1024px) 800px, 1200px`;

  return (
    <picture>
      {/* WebP format for modern browsers */}
      <source
        srcSet={webpSrcSet || `${baseSrc}.webp`}
        sizes={useResponsive ? defaultSizes : undefined}
        type="image/webp"
      />
      {/* Fallback to optimized original format */}
      <source
        srcSet={fallbackSrcSet || `${baseSrc}-optimized${getExtension(src)}`}
        sizes={useResponsive ? defaultSizes : undefined}
        type={getMimeType(src)}
      />
      {/* Final fallback img */}
      <img
        src={`${baseSrc}-optimized${getExtension(src)}`}
        srcSet={fallbackSrcSet}
        sizes={useResponsive ? defaultSizes : undefined}
        alt={alt}
        width={width}
        height={height}
        className={className}
        loading={priority ? 'eager' : loading}
        decoding="async"
        {...props}
      />
    </picture>
  );
};

/**
 * Get file extension from path
 */
function getExtension(path) {
  const match = path.match(/\.(png|jpg|jpeg)$/i);
  return match ? match[0] : '.png';
}

/**
 * Get MIME type from path
 */
function getMimeType(path) {
  if (path.match(/\.png$/i)) return 'image/png';
  if (path.match(/\.(jpg|jpeg)$/i)) return 'image/jpeg';
  return 'image/png';
}

export default OptimizedImage;

