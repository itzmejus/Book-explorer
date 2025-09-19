const SingleBookSkeleton = () => {
    return (
        <div className="bg-gray-50">
            <div className="mx-auto p-6">
                <div className="bg-white rounded-xl shadow-lg overflow-hidden animate-pulse">
                    <div className="bg-gray-300 p-6 sm:p-8">
                        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
                            <div className="w-48 h-64 sm:w-56 sm:h-72 bg-white/20 rounded-lg"></div>
                            <div className="flex-1 space-y-4">
                                <div className="h-8 bg-white/30 rounded w-3/4"></div>
                                <div className="h-6 bg-white/30 rounded w-1/2"></div>
                                <div className="flex gap-2">
                                    <div className="h-6 w-24 bg-white/30 rounded-full"></div>
                                    <div className="h-6 w-20 bg-white/30 rounded-full"></div>
                                    <div className="h-6 w-28 bg-white/30 rounded-full"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 sm:p-8">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            <div className="lg:col-span-2 space-y-8">
                                <div>
                                    <div className="h-6 bg-gray-200 rounded w-32 mb-4"></div>
                                    <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
                                    <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                                </div>
                            </div>
                            <div className="space-y-6">
                                <div>
                                    <div className="h-6 bg-gray-200 rounded w-24 mb-3"></div>
                                    <div className="flex flex-wrap gap-2">
                                        <div className="h-6 w-20 bg-gray-200 rounded-full"></div>
                                        <div className="h-6 w-24 bg-gray-200 rounded-full"></div>
                                    </div>
                                </div>
                                <div>
                                    <div className="h-6 bg-gray-200 rounded w-28 mb-3"></div>
                                    <div className="space-y-2">
                                        <div className="h-6 w-full bg-gray-200 rounded"></div>
                                        <div className="h-6 w-3/4 bg-gray-200 rounded"></div>
                                    </div>
                                </div>
                                <div className="bg-gray-100 rounded-lg p-4 space-y-2">
                                    <div className="h-5 w-20 bg-gray-200 rounded"></div>
                                    <div className="h-4 w-full bg-gray-200 rounded"></div>
                                    <div className="h-4 w-2/3 bg-gray-200 rounded"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleBookSkeleton
