const handleDecode = async (result) => {
  console.log("QR Code scanned:", result);
  setScannedData(result);
  try {
    const response = await fetch(`https://be-fit-server.onrender.com/api/items/${result}`);
    const data = await response.json();
    // Handle the fetched data as needed
  } catch (apiError) {
    setError("Failed to fetch item details.");
  }
};