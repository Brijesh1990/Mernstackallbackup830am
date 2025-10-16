import React, { useState, useCallback } from 'react';
import { Search, Volume2, Loader, BookOpen, MessageCircle, HeartCrack } from 'lucide-react';

// Main App Component
const App = () => {
  const [searchWord, setSearchWord] = useState('');
  const [wordData, setWordData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const DICTIONARY_API_URL = 'https://api.dictionaryapi.dev/api/v2/entries/en/';

  // Function to fetch the meaning from the API
  const getMeaning = useCallback(async () => {
    if (!searchWord.trim()) {
      setError("Please enter a word to search.");
      setWordData(null);
      return;
    }

    setLoading(true);
    setWordData(null);
    setError(null);

    try {
      const response = await fetch(`${DICTIONARY_API_URL}${searchWord.trim()}`);

      if (!response.ok) {
        // Handle 404/not found errors gracefully
        if (response.status === 404) {
          setError(`Could not find the definition for "${searchWord}". Please check the spelling.`);
        } else {
          setError('An unexpected error occurred while fetching the data.');
        }
        return;
      }

      const data = await response.json();

      // The API returns an array, we take the first item
      setWordData(data[0]);

    } catch (err) {
      console.error("Fetch error:", err);
      setError('Network error or connection failed. Please try again.');
    } finally {
      setLoading(false);
    }
  }, [searchWord]);

  // Function to play the pronunciation audio
  const playAudio = useCallback(() => {
    if (wordData && wordData.phonetics) {
      const audioUrl = wordData.phonetics.find(p => p.audio && p.audio.endsWith('.mp3'))?.audio;

      if (audioUrl) {
        const audio = new Audio(audioUrl);
        audio.play().catch(e => console.error("Error playing audio:", e));
      } else {
        console.log("No valid audio file found.");
      }
    }
  }, [wordData]);


  // Helper component to render lists of words (Synonyms/Antonyms)
  const WordList = ({ title, words, colorClass }) => {
    if (!words || words.length === 0) return null;
    return (
      <div className="mt-4 p-4 border border-gray-100 bg-white rounded-xl shadow-inner transition duration-300 hover:shadow-md">
        <h4 className={`text-lg font-semibold ${colorClass} mb-2 flex items-center justify-center`}>
          {title}
        </h4>
        <div className="flex flex-wrap justify-center gap-2">
          {words.slice(0, 10).map((word, index) => (
            <span
              key={index}
              className="px-3 py-1 text-sm bg-gray-100 rounded-full hover:bg-gray-200 transition cursor-pointer"
              onClick={() => setSearchWord(word)} // Allows clicking synonyms to search
            >
              {word}
            </span>
          ))}
          {words.length > 10 && <span className="text-sm text-gray-500">...and {words.length - 10} more</span>}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-8 font-['Inter']">
      <div className="max-w-2xl mx-auto bg-white rounded-3xl shadow-2xl p-6 sm:p-10">
        <header className="text-center mb-10">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-blue-700 leading-tight">
            Live Dictionary <BookOpen className="inline-block h-8 w-8 sm:h-10 sm:w-10 ml-2 mb-1 text-red-500" />
          </h1>
          <p className="text-gray-500 mt-2 text-md">Search millions of words instantly.</p>
        </header>

        {/* Search Bar and Form */}
        <div className="flex flex-col sm:flex-row items-stretch justify-center gap-3">
          <input
            type="text"
            className="flex-1 w-full sm:w-auto border-2 border-gray-300 p-3 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition duration-300 text-lg"
            placeholder="Type a word for search..."
            value={searchWord}
            onChange={(e) => setSearchWord(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && getMeaning()}
            aria-label="Search word input"
          />
          <button
            type="button"
            onClick={getMeaning}
            className="flex-shrink-0 bg-blue-600 text-white p-3 rounded-xl hover:bg-blue-700 transition duration-300 shadow-lg flex items-center justify-center font-semibold text-lg"
            disabled={loading}
            aria-label="Search button"
          >
            {loading ? (
              <Loader className="animate-spin h-5 w-5 mr-2" />
            ) : (
              <Search className='h-5 w-5 mr-2' />
            )}
            Search
          </button>
        </div>

        {/* Loading and Error Display */}
        <div className="mt-8 text-center">
          {loading && (
            <div className="flex justify-center items-center text-blue-600">
              <Loader className="animate-spin h-6 w-6 mr-3" />
              <p className="text-xl">Fetching definition...</p>
            </div>
          )}

          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-xl relative shadow-md">
                <HeartCrack className='inline-block h-5 w-5 mr-2' />
                <span className="block sm:inline">{error}</span>
            </div>
          )}
        </div>

        {/* Result Display */}
        {wordData && (
          <div className="mt-12 p-4 sm:p-6 bg-blue-50 rounded-2xl shadow-inner">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-b pb-4 mb-6 border-blue-200">
              <div className="mb-4 sm:mb-0">
                <h2 className="text-4xl font-extrabold text-blue-700 capitalize">
                  {wordData.word}
                </h2>
                {wordData.phonetic && (
                  <p className="text-xl text-gray-600 mt-1">{wordData.phonetic}</p>
                )}
              </div>

              {/* Audio Button */}
              {wordData.phonetics.some(p => p.audio && p.audio.endsWith('.mp3')) && (
                <button
                  onClick={playAudio}
                  className="bg-red-500 text-white p-3 rounded-full hover:bg-red-600 transition duration-300 shadow-md transform hover:scale-105 flex items-center justify-center w-14 h-14"
                  aria-label="Play pronunciation audio"
                >
                  <Volume2 className='h-6 w-6' />
                </button>
              )}
            </div>

            {/* Meanings Section */}
            {wordData.meanings.map((meaning, meaningIndex) => (
              <div key={meaningIndex} className="mb-8 p-5 bg-white rounded-xl shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-800 border-b pb-2 mb-4">
                  {meaning.partOfSpeech}
                </h3>
                
                {/* Definitions */}
                <ol className="space-y-4 list-decimal list-inside ml-2">
                  {meaning.definitions.slice(0, 3).map((def, defIndex) => (
                    <li key={defIndex} className="text-gray-700 text-base leading-relaxed">
                      <strong className="text-blue-600">Definition {defIndex + 1}:</strong> {def.definition}
                      
                      {/* Example */}
                      {def.example && (
                        <p className="mt-1 text-sm italic text-gray-500 flex items-start">
                          <MessageCircle className="h-4 w-4 mr-2 mt-1 flex-shrink-0" />
                          {def.example}
                        </p>
                      )}
                    </li>
                  ))}
                </ol>

                {/* Synonyms and Antonyms */}
                <div className="flex flex-col sm:flex-row gap-4 mt-6">
                  {meaning.synonyms && meaning.synonyms.length > 0 && (
                    <WordList title="Synonyms" words={meaning.synonyms} colorClass="text-green-600" />
                  )}
                  {meaning.antonyms && meaning.antonyms.length > 0 && (
                    <WordList title="Antonyms" words={meaning.antonyms} colorClass="text-red-600" />
                  )}
                </div>
              </div>
            ))}

            {/* Source Information */}
            {wordData.sourceUrls && wordData.sourceUrls.length > 0 && (
                <div className="text-center mt-6 pt-4 border-t border-gray-200">
                    <a 
                        href={wordData.sourceUrls[0]} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-sm text-gray-500 hover:text-blue-600 transition duration-200"
                    >
                        Source: {wordData.sourceUrls[0]}
                    </a>
                </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
