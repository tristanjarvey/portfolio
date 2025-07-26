import { useEffect } from 'react';
import Image from 'next/image';

interface ImageModalProps {
    isOpen: boolean;
    onClose: () => void;
    imageSrc: string;
    imageAlt: string;
    images?: string[];
    currentIndex?: number;
    onImageChange?: (index: number) => void;
}

export default function ImageModal({ 
    isOpen, 
    onClose, 
    imageSrc, 
    imageAlt, 
    images, 
    currentIndex = 0, 
    onImageChange 
}: ImageModalProps) {
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                onClose();
            }
        };

        const handleArrowKeys = (e: KeyboardEvent) => {
            if (!images || !onImageChange) return;
            
            if (e.key === 'ArrowLeft') {
                const prevIndex = currentIndex > 0 ? currentIndex - 1 : images.length - 1;
                onImageChange(prevIndex);
            } else if (e.key === 'ArrowRight') {
                const nextIndex = currentIndex < images.length - 1 ? currentIndex + 1 : 0;
                onImageChange(nextIndex);
            }
        };

        if (isOpen) {
            document.addEventListener('keydown', handleEscape);
            document.addEventListener('keydown', handleArrowKeys);
            document.body.style.overflow = 'hidden';
        }

        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.removeEventListener('keydown', handleArrowKeys);
            document.body.style.overflow = 'unset';
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div 
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
            onClick={onClose}
        >
            <div className="relative max-w-4xl max-h-full">
                <button
                    onClick={onClose}
                    className="absolute -top-12 right-0 text-white text-2xl hover:text-gray-300 transition-colors"
                    aria-label="Close modal"
                >
                    ✕
                </button>
                
                {images && images.length > 1 && onImageChange && (
                    <>
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                const prevIndex = currentIndex > 0 ? currentIndex - 1 : images.length - 1;
                                onImageChange(prevIndex);
                            }}
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-4xl hover:text-gray-300 transition-colors"
                            aria-label="Previous image"
                        >
                            ‹
                        </button>
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                const nextIndex = currentIndex < images.length - 1 ? currentIndex + 1 : 0;
                                onImageChange(nextIndex);
                            }}
                            className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-4xl hover:text-gray-300 transition-colors"
                            aria-label="Next image"
                        >
                            ›
                        </button>
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-sm">
                            {currentIndex + 1} / {images.length}
                        </div>
                    </>
                )}
                
                <div onClick={(e) => e.stopPropagation()}>
                    <Image
                        src={imageSrc}
                        alt={imageAlt}
                        width={800}
                        height={600}
                        className="max-w-full max-h-[80vh] object-contain rounded-lg"
                        priority
                    />
                </div>
            </div>
        </div>
    );
} 