const handleDecode = async (result) => {
  console.log("QR Code scanned:", result);
  setScannedData(result);
  try {
    const response = await fetch(`http://localhost:3000/api/items/${result}`);
    const data = await response.json();
    // Handle the fetched data as needed
  } catch (apiError) {
    setError("Failed to fetch item details.");
  }
};