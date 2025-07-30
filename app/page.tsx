"use client";

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, Truck, Instagram, Users, Star, ShoppingBag, Menu, ChevronLeft, ChevronRight, Ruler } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import React, { useState, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";


export default function Component() {
  const [selectedKurti, setSelectedKurti] = useState(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel();
  const [isShippingInfoOpen, setIsShippingInfoOpen] = useState(false);
  const [isReturnsInfoOpen, setIsReturnsInfoOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isSizeChartOpen, setIsSizeChartOpen] = useState(false);

  useEffect(() => {
    // Loading animation timer - reduced to 800ms
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800); // 0.8 seconds for the loading animation

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (emblaApi && selectedImage !== undefined) {
      emblaApi.scrollTo(selectedImage);
    }
  }, [emblaApi, selectedImage, selectedKurti]);

  const toggleShippingInfo = () => {
    setIsShippingInfoOpen(!isShippingInfoOpen);
  };

  const toggleReturnsInfo = () => {
    setIsReturnsInfoOpen(!isReturnsInfoOpen);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleSizeChart = () => {
    setIsSizeChartOpen(!isSizeChartOpen);
  };

  // Size chart data
  const sizeChartData = [
    { size: "XS", chest: "34", waist: "32", hipSize: "37" },
    { size: "S", chest: "36", waist: "34", hipSize: "39" },
    { size: "M", chest: "38", waist: "36", hipSize: "41" },
    { size: "L", chest: "40", waist: "38", hipSize: "43" },
    { size: "XL", chest: "42", waist: "40", hipSize: "46" },
    { size: "XXL", chest: "44", waist: "42", hipSize: "54" },
  ];

  // Loading screen component
  if (isLoading) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="flex flex-col items-center space-y-4 animate-pulse">
          <div className="relative">
            <Image
              src="/images/snehal-fashion-logo.jpg"
              alt="Snehal Fashion Logo"
              width={100}
              height={100}
              className="rounded-full object-cover shadow-xl animate-bounce"
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-amber-400/20 to-orange-400/20 animate-ping"></div>
          </div>
          <div className="text-center space-y-1">
            <h1 className="text-3xl font-bold text-gray-900 animate-fade-in">
              Snehal Fashion
            </h1>
            <p className="text-base text-amber-600 animate-fade-in-delay">
              Where Elegance Meets Style
            </p>
          </div>
          <div className="flex space-x-1">
            <div className="w-2 h-2 bg-amber-600 rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-amber-600 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
            <div className="w-2 h-2 bg-amber-600 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          </div>
        </div>
        
        {/* Sliding elements that move to final position */}
        <div className="absolute top-4 left-4 flex items-center space-x-3 opacity-0 animate-slide-from-center-to-original" style={{ animationDelay: '0.4s' }}>
          <Image
            src="/images/snehal-fashion-logo.jpg"
            alt="Snehal Fashion Logo"
            width={40}
            height={40}
            className="rounded-full object-cover"
          />
          <span className="text-xl font-bold text-gray-900">Snehal Fashion</span>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen animate-fade-in">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 animate-slide-down">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center space-x-3 animate-slide-in-left">
            <Image
              src="/images/snehal-fashion-logo.jpg"
              alt="Snehal Fashion Logo"
              width={40}
              height={40}
              className="rounded-full object-cover"
            />
            <span className="text-xl font-bold text-gray-900">Snehal Fashion</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-6 animate-slide-in-right">
            <Link href="#home" className="text-sm font-medium hover:text-amber-600 transition-colors">
              Home
            </Link>
            <Link href="#collections" className="text-sm font-medium hover:text-amber-600 transition-colors">
              Collections
            </Link>
            <Link href="#about" className="text-sm font-medium hover:text-amber-600 transition-colors">
              About
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-amber-600 transition-colors">
              Contact
            </Link>
          </nav>

          <div className="flex items-center space-x-4 animate-slide-in-right">
            <Button
              variant="outline"
              size="sm"
              className="hidden sm:flex bg-transparent border-amber-200 text-amber-700 hover:bg-amber-50"
              asChild
            >
              <Link href="https://www.instagram.com/snehalfashion____/" target="_blank" rel="noopener noreferrer">
                <ShoppingBag className="h-4 w-4 mr-2" />
                Shop Now
              </Link>
            </Button>
            <Button variant="ghost" size="sm" className="md:hidden" onClick={toggleMobileMenu}>
              <Menu className="h-4 w-4" />
            </Button>
          </div>
        </div>
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 w-full bg-white shadow-md z-50 animate-slide-down">
            <nav className="flex flex-col items-center space-y-4 py-4">
              <Link href="#home" className="text-sm font-medium hover:text-amber-600 transition-colors">
                Home
              </Link>
              <Link href="#collections" className="text-sm font-medium hover:text-amber-600 transition-colors">
                Collections
              </Link>
              <Link href="#about" className="text-sm font-medium hover:text-amber-600 transition-colors">
                About
              </Link>
              <Link href="#contact" className="text-sm font-medium hover:text-amber-600 transition-colors">
                Contact
              </Link>
              <Button
                variant="outline"
                size="sm"
                className="bg-transparent border-amber-200 text-amber-700 hover:bg-amber-50"
                asChild
              >
                <Link href="https://www.instagram.com/snehalfashion____/" target="_blank" rel="noopener noreferrer">
                  <ShoppingBag className="h-4 w-4 mr-2" />
                  Shop Now
                </Link>
              </Button>
            </nav>
          </div>
        )}
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section id="home" className="relative py-12 md:py-24 lg:py-32 bg-gradient-to-br from-amber-50 to-orange-50 flex items-center animate-fade-in-up">
          <div className="container px-4 md:px-6 flex flex-col items-center justify-center min-h-[400px]">
            <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto w-full">
              <div className="flex flex-col justify-center space-y-6 w-full">
                <div className="space-y-4 w-full">
                  <Badge variant="secondary" className="w-fit bg-amber-100 text-amber-800 hover:bg-amber-200 mx-auto animate-bounce">
                    ✨ New Collection Available
                  </Badge>
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-gray-900 animate-fade-in-up">
                    Where Everyday Elegance Meets <span className="text-amber-600">Effortless Style</span>
                  </h1>
                  <p className="max-w-[600px] mx-auto text-gray-600 md:text-xl leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                    Discover beautiful kurtis that are both affordable and empowering. Our thoughtfully designed kurti
                    collections bring out your confidence, comfort, and charm for every occasion.
                  </p>
                </div>
                <div className="flex flex-col gap-3 min-[400px]:flex-row animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                  <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white" asChild>
                     <Link href="#collections">Shop Collections</Link>
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-amber-200 text-amber-700 hover:bg-amber-50 bg-transparent"
                    asChild
                  >
                    <Link href="https://www.instagram.com/snehalfashion____/" target="_blank" rel="noopener noreferrer">
                      Follow on Instagram
                    </Link>
                  </Button>
                </div>
                <div className="flex items-center gap-6 text-sm text-gray-600 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                  <div className="flex items-center gap-2">
                    <Truck className="h-4 w-4 text-amber-600" />
                    <span>Shipping across India</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Heart className="h-4 w-4 text-amber-600" />
                    <span>Women-owned</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Collections Section */}
        <section id="collections" className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-900">Our Kurti Collections</h2>
              <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          From casual everyday kurtis to festive occasion wear - discover our curated collection of beautiful
          kurtis designed for today's fashion-forward woman.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
          {
            name: "Floral Print Kurti",
            images: ["/images/pink_kurti.jpg","/images/pink_kurti1.jpg","/images/pink_kurti2.jpg"],
            price: "₹499 + Shipping Charges",
            desc: "Beautiful floral print kurti for all occasions.",
            soldOut: true,
          },
          {
            name: "Leaf Print Kurti",
            desc: "Elegant designs for celebrations",
            images: ["/images/blue.jpg","/images/blue1.jpg","/images/blue2.jpg"],
            price: "₹449 + Shipping Charges",
            soldOut: false,

          },
          {
            name: "Black Floral Kurti",
            desc: "Professional and comfortable",
            images: ["/images/black.jpg","/images/black1.jpg","/images/black2.jpg"],
            price: "₹449 + Shipping Charges",
          },
          {
            name: "Hot Red Kurti",
            desc: "Stylish for all occasions",
            images: ["/images/red1.jpg","/images/red.jpg"],
            price: "₹599",
          },
          
              ].map((item, index) => (
<Card
  key={index}
  className={`group cursor-pointer border-0 shadow-md hover:shadow-xl transition-all duration-300 ${item.soldOut ? 'opacity-90' : ''}`}
  onClick={() => {
    if (!item.soldOut) {
      setSelectedKurti(item);
      setSelectedImage(0);
    }
  }}
>
  <CardContent className="p-0">
    <div className="relative overflow-hidden rounded-lg aspect-[5/6]">
      <Image
        src={item.images[0]}
        alt={item.name}
        fill
        className={`object-cover transition-transform duration-300 ${item.soldOut ? '' : 'group-hover:scale-105'}`}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      
      {/* Sold Out Banner */}
      {item.soldOut && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-red-600/90 text-white px-4 py-2 rounded-lg font-bold text-lg shadow-lg transform -rotate-12">
            SOLD OUT
          </div>
        </div>
      )}
      
      <div className="absolute bottom-4 left-4 text-white">
        <h3 className="font-semibold text-lg">{item.name}</h3>
        <p className="text-sm text-gray-200">{item.desc}</p>
        {item.price && (
          <span className={`mt-1 inline-block px-2 py-1 rounded text-xs font-semibold ${item.soldOut ? 'bg-gray-600/90' : 'bg-amber-600/90'}`}>
            {item.soldOut ? 'Sold Out' : item.price}
          </span>
        )}
      </div>
      {!item.soldOut && (
        <div className="absolute bottom-4 right-4">
          <Button
            variant="outline"
            size="sm"
            className="bg-gradient-to-b from-amber-500 to-amber-700 text-white hover:from-amber-600 hover:to-amber-800"
            asChild
          >
            <Link
              href="https://www.instagram.com/snehalfashion____/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()} // Prevents the card click event
            >
              Shop Now
            </Link>
          </Button>
        </div>
      )}
    </div>
  </CardContent>
</Card>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-12 md:py-24 lg:py-32 bg-gradient-to-br from-amber-25 to-orange-25">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_600px] items-center">
              <div className="flex flex-col justify-center space-y-6">
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-gray-900">
                    More Than Just a Brand
                  </h2>
                  <p className="text-gray-600 md:text-lg leading-relaxed">
                    Founded with love and passion, Snehal Fashion specializes in creating beautiful kurtis that redefine
                    modern Indian wear with timeless designs, premium fabrics, and a size-inclusive approach.
                  </p>
                  <p className="text-gray-600 md:text-lg leading-relaxed">
                    We believe kurtis should be both affordable and empowering, designed to bring out your confidence,
                    comfort, and charm whether you're at work, enjoying a casual day out, or attending a festive event.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: Heart, text: "Women-owned", color: "text-amber-600" },
                    { icon: Truck, text: "Shipping across India", color: "text-blue-600" },
                    { icon: Instagram, text: "Active on Instagram", color: "text-purple-600" },
                    { icon: Users, text: "Size-inclusive", color: "text-green-600" },
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <item.icon className={`h-5 w-5 ${item.color}`} />
                      <span className="text-sm font-medium text-gray-700">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <Image
                  src="/images/snehal-fashion-logo.jpg"
                  alt="Snehal Fashion Logo"
                  width={400}
                  height={500}
                  className="mx-auto aspect-[4/5] overflow-hidden rounded-2xl object-cover shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-gray-900">
                Why Choose Snehal Fashion?
              </h2>
              <p className="max-w-[600px] text-gray-600 md:text-xl/relaxed">Stylish. Comfortable. Made for You.</p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  icon: Heart,
                  title: "Quality First",
                  desc: "Premium fabrics and thoughtful designs that last",
                  color: "bg-amber-100 text-amber-700",
                },
                {
                  icon: Star,
                  title: "Affordable Luxury",
                  desc: "High-quality fashion that doesn't break the bank",
                  color: "bg-yellow-100 text-yellow-700",
                },
                {
                  icon: Users,
                  title: "Size Inclusive",
                  desc: "Beautiful designs for every body type",
                  color: "bg-green-100 text-green-700",
                },
                {
                  icon: Truck,
                  title: "Fast Delivery",
                  desc: "Quick shipping across India with care",
                  color: "bg-blue-100 text-blue-700",
                },
              ].map((item, index) => (
                <div key={index} className="flex flex-col items-center text-center space-y-4">
                  <div className={`p-3 rounded-full ${item.color}`}>
                    <item.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-12 md:py-24 lg:py-32 bg-gradient-to-br from-amber-25 to-orange-25">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-900">Get In Touch</h2>
              <p className="max-w-[600px] text-gray-600 md:text-xl/relaxed">
                Have questions about our kurtis or need styling advice? We'd love to hear from you!
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-3 rounded-full bg-amber-100 text-amber-700">
                  <Instagram className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Instagram</h3>
                <p className="text-gray-600">Follow us for daily style inspiration</p>
                <Link
                  href="https://www.instagram.com/snehalfashion____/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-600 hover:text-amber-700 font-medium"
                >
                  @snehalfashion____
                </Link>
              </div>

              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-3 rounded-full bg-green-100 text-green-700">
                  <Heart className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Customer Care</h3>
                <p className="text-gray-600">We're here to help with your orders</p>
                <p className="text-amber-600 font-medium">
                  <a href="mailto:snehalfashion26@gmail.com" className="hover:underline">snehalfashion26@gmail.com</a><br />
                  <a href="tel:+919999999999" className="hover:underline">+91 79828 86379</a>
                </p>
              </div>

              <div className="flex flex-col items-center text-center space-y-4 md:col-span-2 lg:col-span-1">
                <div className="p-3 rounded-full bg-blue-100 text-blue-700">
                  <Truck className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Shipping</h3>
                <p className="text-gray-600">Delivery across India</p>
                <p className="text-amber-600 font-medium">3-7 business days</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 md:py-24 lg:py-32 bg-gradient-to-r from-amber-500 to-orange-500">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-6 text-center text-white">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Join the Snehal Fashion Family
              </h2>
              <p className="max-w-[600px] text-amber-100 md:text-xl/relaxed">
                Let your outfit do the talking. Discover collections that celebrate your unique style and confidence.
              </p>
              <div className="flex justify-center">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-amber-700 bg-transparent"
                  asChild
                >
                  <Link href="https://www.instagram.com/snehalfashion____/" target="_blank" rel="noopener noreferrer">
                    <Instagram className="h-4 w-4 mr-2" />
                    Follow @snehalfashion____
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
        {selectedKurti && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
            <div className="bg-white rounded-lg shadow-lg max-w-md w-full p-6 relative">
              <button
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-xl"
                onClick={() => setSelectedKurti(null)}
              >
                &times;
              </button>
              {/* Carousel here */}
              <div className="mb-4 relative">
                {/* Left Arrow */}
                <button
                  className="absolute top-1/2 left-2 z-10 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-1 shadow"
                  onClick={() => setSelectedImage((prev) => prev === 0 ? selectedKurti.images.length - 1 : prev - 1)}
                  style={{ display: selectedKurti.images.length > 1 ? "block" : "none" }}
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-6 h-6 text-amber-700" />
                </button>

                {/* Carousel */}
                <div className="overflow-hidden rounded-lg">
                  <div 
                    className="flex transition-transform duration-500 ease-in-out" 
                    style={{ transform: `translateX(-${selectedImage * 100}%)` }}
                  >
                    {selectedKurti.images.map((img, idx) => (
                      <div key={img} className="w-full flex-shrink-0">
                        <Image
                          src={img}
                          alt={selectedKurti.name}
                          width={300}
                          height={360}
                          className="rounded-lg mx-auto w-full h-auto"
                          style={{ maxHeight: "60vh", objectFit: "contain" }}
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right Arrow */}
                <button
                  className="absolute top-1/2 right-2 z-10 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-1 shadow"
                  onClick={() => setSelectedImage((prev) => prev === selectedKurti.images.length - 1 ? 0 : prev + 1)}
                  style={{ display: selectedKurti.images.length > 1 ? "block" : "none" }}
                  aria-label="Next image"
                >
                  <ChevronRight className="w-6 h-6 text-amber-700" />
                </button>

                {/* Dots navigation */}
                {selectedKurti.images.length > 1 && (
                  <div className="flex justify-center mt-2 gap-2">
                    {selectedKurti.images.map((img, idx) => (
                      <button
                        key={img}
                        className={`w-3 h-3 rounded-full border transition-colors duration-200 ${
                          selectedImage === idx ? "bg-amber-600 border-amber-600" : "bg-gray-300 border-gray-300 hover:bg-gray-400"
                        }`}
                        onClick={() => setSelectedImage(idx)}
                      />
                    ))}
                  </div>
                )}
              </div>
              {/* Details */}
              <h2 className="text-2xl font-bold mb-2">{selectedKurti.name}</h2>
              <p className="text-gray-700 mb-2">{selectedKurti.desc || selectedKurti.description}</p>
              <p className="text-amber-700 font-semibold mb-4">{selectedKurti.price}</p>
              
              {/* Size Chart Button */}
              <div className="flex gap-2 mb-4">
                <Button
                  variant="outline"
                  size="sm"
                  className="border-amber-200 text-amber-700 hover:bg-amber-50"
                  onClick={toggleSizeChart}
                >
                  <Ruler className="h-4 w-4 mr-2" />
                  Size Chart
                </Button>
                <Button
                  className="bg-amber-600 hover:bg-amber-700 text-white flex-1"
                  asChild
                >
                  <Link
                    href="https://www.instagram.com/snehalfashion____/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Shop Now
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t bg-gradient-to-br from-amber-25 to-orange-25">
        <div className="container px-4 md:px-6 py-12">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Image
                  src="/images/snehal-fashion-logo.jpg"
                  alt="Snehal Fashion Logo"
                  width={32}
                  height={32}
                  className="rounded-full object-cover"
                />
                <span className="text-xl font-bold text-gray-900">Snehal Fashion</span>
              </div>
              <p className="text-gray-600 text-sm">
                Where Everyday Elegance Meets Effortless Style. Fashion that's affordable, empowering, and made for you.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-sm font-semibold text-gray-900">Collections</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <Link href="#" className="hover:text-amber-600">
                    Casual Kurtis
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-amber-600">
                    Festive Kurtis
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-amber-600">
                    Work Wear Kurtis
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-amber-600">
                    Party Kurtis
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="text-sm font-semibold text-gray-900">Support</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <Link href="#" className="hover:text-amber-600">
                    Size Guide
                  </Link>
                </li>
                <li>
                  <button onClick={toggleShippingInfo} className="hover:text-amber-600">
                    Shipping Info
                  </button>
                </li>
                <li>
                  <button onClick={toggleReturnsInfo} className="hover:text-amber-600">
                    Returns
                  </button>
                </li>
                <li>
                  <Link href="#contact" className="hover:text-amber-600">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="text-sm font-semibold text-gray-900">Connect</h4>
              <div className="flex space-x-4">
                <Link
                  href="https://www.instagram.com/snehalfashion____/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-amber-600"
                >
                  <Instagram className="h-5 w-5" />
                </Link>
              </div>
              <p className="text-sm text-gray-600">Follow us @snehalfashion____ for daily style inspiration</p>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-amber-200">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-sm text-gray-600">© {new Date().getFullYear()} Snehal Fashion. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>

      {/* Shipping Info Modal */}
      {isShippingInfoOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
          <div className="bg-white rounded-lg shadow-lg max-w-md w-full p-6 relative">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-xl"
              onClick={toggleShippingInfo}
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold mb-4">Shipping Information</h2>
            <p className="text-gray-700">
              - Fast and reliable shipping across India.<br />
              - Order processing time : 2 to 3 business days.<br />
              - Delivery charges : Depending on your location. (Free for orders above Rs. 999)<br />
              - Estimated delivery time : 3 to 7 business days after dispatch.<br />
              - We ensure your order is packed with care and shipped promptly.<br />

            </p>
          </div>
        </div>
      )}

      {/* Returns Info Modal */}
      {isReturnsInfoOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
          <div className="bg-white rounded-lg shadow-lg max-w-md w-full p-6 relative">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-xl"
              onClick={toggleReturnsInfo}
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold mb-4">Returns Information</h2>
            <p className="text-gray-700">
              <div className="text-center">
                <strong>No Return Policy</strong><br /> 
              </div>
              - We offer a 2-day Exchange policy for all our products after delivery.<br />
              - Items must be returned in their original condition with tags attached.<br />
              - Please contact our support team to initiate an exchange.<br /> 
            </p>
          </div>
        </div>
      )}

      {/* Size Chart Modal */}
      {isSizeChartOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60">
          <div className="bg-white rounded-lg shadow-lg max-w-lg w-full p-6 relative mx-4">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-xl"
              onClick={toggleSizeChart}
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold mb-4 text-center">Size Chart</h2>
            <p className="text-sm text-gray-600 mb-4 text-center">All measurements are in inches</p>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-amber-100">
                    <th className="border border-gray-300 px-3 py-2 text-left font-semibold text-gray-900">Size</th>
                    <th className="border border-gray-300 px-3 py-2 text-center font-semibold text-gray-900">Chest</th>
                    <th className="border border-gray-300 px-3 py-2 text-center font-semibold text-gray-900">Waist</th>
                    <th className="border border-gray-300 px-3 py-2 text-center font-semibold text-gray-900">Hip Size</th>
                  </tr>
                </thead>
                <tbody>
                  {sizeChartData.map((row, index) => (
                    <tr key={row.size} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                      <td className="border border-gray-300 px-3 py-2 font-medium text-amber-700">{row.size}</td>
                      <td className="border border-gray-300 px-3 py-2 text-center">{row.chest}</td>
                      <td className="border border-gray-300 px-3 py-2 text-center">{row.waist}</td>
                      <td className="border border-gray-300 px-3 py-2 text-center">{row.hipSize}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div className="mt-4 p-3 bg-amber-50 rounded-lg">
              <p className="text-sm text-gray-700">
                <strong>How to measure:</strong><br />
                • <strong>Chest:</strong> Measure around the fullest part of your chest<br />
                • <strong>Waist:</strong> Measure around your natural waistline<br />
                • <strong>Hip:</strong> Measure around the fullest part of your hips
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}