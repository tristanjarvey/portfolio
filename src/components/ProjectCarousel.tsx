import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import Image from 'next/image';
import { useState } from 'react';
import ImageModal from './ImageModal';

interface ProjectCarouselProps {
    images: string[];
    title: string;
}

export default function ProjectCarousel({ images, title }: ProjectCarouselProps) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);

    const handleImageClick = (index: number) => {
        setSelectedImageIndex(index);
        setIsModalOpen(true);
    };

    return (
        <>
            <div className="relative overflow-hidden rounded">
                <Carousel className="w-full">
                    <CarouselContent>
                        {images.map((image, index) => (
                            <CarouselItem key={index}>
                                <div 
                                    className="cursor-pointer hover:opacity-90 transition-opacity"
                                    onClick={() => handleImageClick(index)}
                                >
                                    <Image 
                                        src={image} 
                                        alt={`${title} screenshot ${index + 1}`} 
                                        className="rounded w-full h-48 object-cover" 
                                        width={300} 
                                        height={200} 
                                    />
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    {images.length > 1 && (
                        <>
                            <CarouselPrevious className="left-2 h-8 w-8" />
                            <CarouselNext className="right-2 h-8 w-8" />
                        </>
                    )}
                </Carousel>
            </div>
            
            <ImageModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                imageSrc={images[selectedImageIndex]}
                imageAlt={`${title} screenshot ${selectedImageIndex + 1}`}
                images={images}
                currentIndex={selectedImageIndex}
                onImageChange={setSelectedImageIndex}
            />
        </>
    );
} 