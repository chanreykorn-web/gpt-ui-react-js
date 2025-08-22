import React from 'react';

export const Loading = () => {
    return (
        <div>
            <div className="flex items-center justify-center h-screen">
                <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-fujiaire-text"></div>
            </div>
            <div className="text-center text-fujiaire-text text-xl mt-4">
                Loading...
            </div>
        </div>
    );
}
