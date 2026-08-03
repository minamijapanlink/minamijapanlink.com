import React, { useState, useEffect } from 'react';
import { GALLERY_ITEMS, GalleryItem } from '../data/gallery';
import { Image, ChevronLeft, ChevronRight, Play, Pause, Maximize2, X, MapPin, Sparkles, Plus, Upload, Check } from 'lucide-react';

export const GallerySection: React.FC = () => {
  const [itemsList, setItemsList] = useState<GalleryItem[]>(GALLERY_ITEMS);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(true);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState<boolean>(false);

  // Form state for adding custom photo
  const [newTitle, setNewTitle] = useState('');
  const [newCategory, setNewCategory] = useState<'classroom' | 'visa_success' | 'office' | 'culture' | 'events'>('classroom');
  const [newImageUrl, setNewImageUrl] = useState('');
  const [newLocation, setNewLocation] = useState('Tokyo, Japan');
  const [newDescription, setNewDescription] = useState('');
  const [uploadedFilePreview, setUploadedFilePreview] = useState<string | null>(null);

  const categories = [
    { id: 'all', label: 'All Photos' },
    { id: 'classroom', label: 'Classroom' },
    { id: 'visa_success', label: 'COE & Visa' },
    { id: 'office', label: 'Tokyo Office' },
    { id: 'culture', label: 'Culture' },
    { id: 'events', label: 'Events' },
  ];

  const filteredItems = selectedCategory === 'all'
    ? itemsList
    : itemsList.filter(item => item.category === selectedCategory);

  // Keep currentIndex in bounds when category changes or items update
  useEffect(() => {
    setCurrentIndex(0);
  }, [selectedCategory, itemsList.length]);

  // Autoplay interval
  useEffect(() => {
    if (!isAutoPlaying || filteredItems.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % filteredItems.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, filteredItems.length]);

  const currentItem = filteredItems[currentIndex] || filteredItems[0];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredItems.length);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUploadedFilePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAddPhotoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const finalImage = uploadedFilePreview || newImageUrl || 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1200&q=80';
    
    const categoryLabels: Record<string, string> = {
      classroom: 'Classroom & Study',
      visa_success: 'COE & Visa Success',
      office: 'Tokyo Office & Campus',
      culture: 'Cultural Events',
      events: 'Events & Gathering',
    };

    const newItem: GalleryItem = {
      id: `custom-gal-${Date.now()}`,
      title: newTitle || `Minami ${categoryLabels[newCategory]} Photo`,
      category: newCategory,
      categoryLabel: categoryLabels[newCategory] || 'Company Photo',
      imageUrl: finalImage,
      description: newDescription || 'Company photo uploaded by visitor.',
      location: newLocation || 'Tokyo, Japan',
      date: 'Just Now',
      tags: ['Company Photo', 'User Upload', newCategory]
    };

    setItemsList(prev => [newItem, ...prev]);
    setSelectedCategory(newCategory);
    setCurrentIndex(0);

    // Reset Form
    setNewTitle('');
    setNewImageUrl('');
    setUploadedFilePreview(null);
    setNewDescription('');
    setIsAddModalOpen(false);
  };

  return (
    <section id="gallery" className="py-16 sm:py-20 bg-zinc-950 text-white border-b border-zinc-800 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-red-600/10 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-bold uppercase tracking-wider mb-2">
              <Image className="w-4 h-4" />
              <span>Company Photo Gallery</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Minami Japan Link <span className="text-[#EE3524]">In Photos</span>
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400 mt-1">
              Slide by slide view of our Tokyo classrooms ({itemsList.filter(i => i.category==='classroom').length} photos), student visa success, and company operations.
            </p>
          </div>

          <button
            onClick={() => setIsAddModalOpen(true)}
            className="shrink-0 px-4 py-2.5 rounded-xl bg-[#EE3524] hover:bg-red-600 text-white font-bold text-xs sm:text-sm flex items-center gap-2 shadow-lg shadow-red-900/30 transition-all transform hover:scale-105 cursor-pointer"
          >
            <Plus className="w-4 h-4" />
            <span>Add Company Image</span>
          </button>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 mb-8">
          {categories.map((cat) => {
            const count = cat.id === 'all' ? itemsList.length : itemsList.filter(i => i.category === cat.id).length;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer flex items-center gap-1.5 ${
                  selectedCategory === cat.id
                    ? 'bg-[#EE3524] text-white shadow-lg shadow-red-900/40 scale-105'
                    : 'bg-zinc-900/80 border border-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-800'
                }`}
              >
                <span>{cat.label}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                  selectedCategory === cat.id ? 'bg-white/20 text-white' : 'bg-zinc-800 text-zinc-400'
                }`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Main Slider Viewport */}
        {currentItem ? (
          <div className="relative bg-zinc-900 rounded-3xl overflow-hidden border border-zinc-800 shadow-2xl group">
            
            {/* Main Image Container */}
            <div className="relative aspect-16/9 sm:aspect-21/9 md:aspect-2/1 w-full bg-black overflow-hidden flex items-center justify-center">
              <img
                key={currentItem.id}
                src={currentItem.imageUrl}
                alt={currentItem.title}
                className="w-full h-full object-cover object-center transition-all duration-700 ease-in-out transform scale-100"
                referrerPolicy="no-referrer"
              />

              {/* Dark Gradient Overlays for Controls Readability */}
              <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-black/80 via-black/20 to-transparent pointer-events-none" />
              <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none" />

              {/* Top Bar Overlay Info & Fullscreen Toggle */}
              <div className="absolute top-4 inset-x-4 flex items-center justify-between z-20">
                <div className="flex items-center gap-2">
                  <span className="bg-zinc-900/90 backdrop-blur-md border border-zinc-700/60 text-amber-400 text-[11px] font-bold px-3 py-1 rounded-full flex items-center gap-1.5 shadow-md">
                    <Sparkles className="w-3.5 h-3.5" />
                    {currentItem.categoryLabel}
                  </span>
                  <span className="bg-black/60 backdrop-blur-md border border-white/10 text-zinc-300 text-[11px] font-medium px-2.5 py-1 rounded-full flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-red-500" />
                    {currentItem.location}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                    title={isAutoPlaying ? "Pause Slideshow" : "Start Slideshow"}
                    className="p-2 rounded-full bg-zinc-900/80 hover:bg-zinc-800 text-white border border-zinc-700/60 backdrop-blur-md transition-colors cursor-pointer"
                  >
                    {isAutoPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 text-emerald-400" />}
                  </button>
                  <button
                    onClick={() => setIsFullscreen(true)}
                    title="Fullscreen View"
                    className="p-2 rounded-full bg-zinc-900/80 hover:bg-zinc-800 text-white border border-zinc-700/60 backdrop-blur-md transition-colors cursor-pointer"
                  >
                    <Maximize2 className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Left Arrow Button */}
              <button
                onClick={handlePrev}
                className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 z-20 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-black/60 hover:bg-[#EE3524] text-white border border-white/20 flex items-center justify-center backdrop-blur-md transition-all duration-300 shadow-xl scale-95 hover:scale-105 cursor-pointer"
                aria-label="Previous Slide"
              >
                <ChevronLeft className="w-6 h-6 sm:w-7 sm:h-7" />
              </button>

              {/* Right Arrow Button */}
              <button
                onClick={handleNext}
                className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 z-20 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-black/60 hover:bg-[#EE3524] text-white border border-white/20 flex items-center justify-center backdrop-blur-md transition-all duration-300 shadow-xl scale-95 hover:scale-105 cursor-pointer"
                aria-label="Next Slide"
              >
                <ChevronRight className="w-6 h-6 sm:w-7 sm:h-7" />
              </button>

              {/* Bottom Image Title Overlay */}
              <div className="absolute bottom-4 inset-x-6 z-20 flex flex-col sm:flex-row sm:items-end justify-between gap-2">
                <div>
                  <h3 className="text-lg sm:text-2xl font-bold text-white drop-shadow-md">
                    {currentItem.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-300 max-w-2xl line-clamp-1 drop-shadow-sm">
                    {currentItem.description}
                  </p>
                </div>

                {/* Counter Badge */}
                <div className="shrink-0 bg-black/70 backdrop-blur-md border border-white/15 px-3 py-1 rounded-full text-xs font-mono font-bold text-zinc-200">
                  {currentIndex + 1} / {filteredItems.length}
                </div>
              </div>
            </div>

            {/* Thumbnail Carousel Strip */}
            <div className="p-4 bg-zinc-900 border-t border-zinc-800/80 flex items-center justify-start sm:justify-center gap-2.5 overflow-x-auto no-scrollbar">
              {filteredItems.map((item, idx) => (
                <button
                  key={item.id}
                  onClick={() => setCurrentIndex(idx)}
                  className={`relative shrink-0 rounded-xl overflow-hidden transition-all duration-300 border-2 cursor-pointer ${
                    idx === currentIndex
                      ? 'border-[#EE3524] ring-2 ring-red-500/50 scale-105 shadow-md'
                      : 'border-transparent opacity-50 hover:opacity-100 hover:scale-100'
                  }`}
                >
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-16 h-12 sm:w-20 sm:h-14 object-cover"
                    referrerPolicy="no-referrer"
                  />
                  {idx === currentIndex && (
                    <div className="absolute inset-0 bg-red-600/10 pointer-events-none" />
                  )}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="p-12 text-center bg-zinc-900 rounded-3xl border border-zinc-800 text-zinc-400">
            No photos in this category yet. Click <strong>"Add Company Image"</strong> to upload one!
          </div>
        )}

      </div>

      {/* Add Custom Image Modal */}
      {isAddModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
          <div className="bg-zinc-900 border border-zinc-800 text-white rounded-2xl max-w-lg w-full p-6 shadow-2xl relative">
            <button
              onClick={() => setIsAddModalOpen(false)}
              className="absolute top-4 right-4 p-2 text-zinc-400 hover:text-white rounded-full bg-zinc-800/80 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="text-xl font-bold mb-1 flex items-center gap-2 text-white">
              <Upload className="w-5 h-5 text-[#EE3524]" />
              Add Company Image
            </h3>
            <p className="text-xs text-zinc-400 mb-5">
              Upload or provide a URL for classroom photos, visa success stories, or company events.
            </p>

            <form onSubmit={handleAddPhotoSubmit} className="space-y-4">
              {/* Category */}
              <div>
                <label className="block text-xs font-semibold text-zinc-300 mb-1">
                  Target Category
                </label>
                <select
                  value={newCategory}
                  onChange={(e) => setNewCategory(e.target.value as any)}
                  className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-red-500"
                >
                  <option value="classroom">Classroom & Study (10+)</option>
                  <option value="visa_success">COE & Visa Success</option>
                  <option value="office">Tokyo Office & Campus</option>
                  <option value="culture">Cultural Events</option>
                  <option value="events">Gatherings & Events</option>
                </select>
              </div>

              {/* Title */}
              <div>
                <label className="block text-xs font-semibold text-zinc-300 mb-1">
                  Image Title
                </label>
                <input
                  type="text"
                  placeholder="e.g. JLPT N5 Classroom Group Study"
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-red-500"
                  required
                />
              </div>

              {/* Upload or Image URL */}
              <div>
                <label className="block text-xs font-semibold text-zinc-300 mb-1">
                  Upload Image File OR Paste Image URL
                </label>
                <div className="space-y-2">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="block w-full text-xs text-zinc-400 file:mr-3 file:py-2 file:px-3 file:rounded-xl file:border-0 file:text-xs file:font-bold file:bg-[#EE3524] file:text-white hover:file:bg-red-600 cursor-pointer"
                  />
                  <div className="text-[10px] text-zinc-500 text-center">- OR PASTE WEB LINK -</div>
                  <input
                    type="url"
                    placeholder="https://images.unsplash.com/photo-..."
                    value={newImageUrl}
                    onChange={(e) => setNewImageUrl(e.target.value)}
                    className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-red-500"
                  />
                </div>
              </div>

              {/* Image Preview */}
              {(uploadedFilePreview || newImageUrl) && (
                <div className="relative aspect-16/9 rounded-xl overflow-hidden border border-zinc-700 bg-black">
                  <img
                    src={uploadedFilePreview || newImageUrl}
                    alt="Preview"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-2 right-2 bg-emerald-600 text-white text-[10px] px-2 py-0.5 rounded font-bold flex items-center gap-1">
                    <Check className="w-3 h-3" /> Image Ready
                  </div>
                </div>
              )}

              {/* Location & Description */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-zinc-300 mb-1">Location</label>
                  <input
                    type="text"
                    value={newLocation}
                    onChange={(e) => setNewLocation(e.target.value)}
                    className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-3 py-2 text-xs text-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-zinc-300 mb-1">Description</label>
                  <input
                    type="text"
                    placeholder="Short description..."
                    value={newDescription}
                    onChange={(e) => setNewDescription(e.target.value)}
                    className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-3 py-2 text-xs text-white"
                  />
                </div>
              </div>

              {/* Submit */}
              <div className="pt-2 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setIsAddModalOpen(false)}
                  className="px-4 py-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-xs font-bold text-zinc-300"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-[#EE3524] hover:bg-red-600 text-xs font-bold text-white shadow-md flex items-center gap-1.5"
                >
                  <Plus className="w-4 h-4" />
                  <span>Add to Gallery</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Fullscreen Lightbox Modal */}
      {isFullscreen && currentItem && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex flex-col items-center justify-between p-4 sm:p-6 animate-fadeIn">
          {/* Top Bar */}
          <div className="w-full flex items-center justify-between z-30">
            <div className="text-white">
              <span className="text-xs uppercase tracking-wider text-red-500 font-bold block">
                {currentItem.categoryLabel}
              </span>
              <h4 className="text-base sm:text-xl font-bold">{currentItem.title}</h4>
            </div>

            <button
              onClick={() => setIsFullscreen(false)}
              className="p-2.5 rounded-full bg-zinc-800 hover:bg-red-600 text-white transition-colors cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Large Image View */}
          <div className="relative flex-1 w-full flex items-center justify-center my-4 overflow-hidden">
            <img
              src={currentItem.imageUrl}
              alt={currentItem.title}
              className="max-w-full max-h-[80vh] object-contain rounded-2xl shadow-2xl"
              referrerPolicy="no-referrer"
            />

            {/* Modal Left/Right Buttons */}
            <button
              onClick={handlePrev}
              className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-zinc-900/80 hover:bg-[#EE3524] text-white transition-colors cursor-pointer"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-zinc-900/80 hover:bg-[#EE3524] text-white transition-colors cursor-pointer"
            >
              <ChevronRight className="w-8 h-8" />
            </button>
          </div>

          {/* Modal Footer */}
          <div className="text-center text-xs text-zinc-400 font-mono">
            Slide {currentIndex + 1} of {filteredItems.length} — Press Esc or click Close
          </div>
        </div>
      )}
    </section>
  );
};


