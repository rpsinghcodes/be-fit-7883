import { useState, useEffect } from "react";
import Html5QrcodePlugin from "@/components/Html5QrcodePlugin";
import { Card } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import QRItem from "@/components/QRItem";
import { getFoodByName } from "@/api/api";
import { Button } from "@/components/ui/button";
import UserFooter from "@/components/footer/userFooter";
import AIWritingAssistant from "@/components/AI/AIWritingAssistant";

const QRScanner = () => {
  const [scannedData, setScannedData] = useState(null);
  const [error, setError] = useState(null);
  const [isScanning, setIsScanning] = useState(true);

  // Reset state when component unmounts
  useEffect(() => {
    return () => {
      setScannedData(null);
      setError(null);
      setIsScanning(false);
    };
  }, []);

  const handleDecode = async (decodedText, decodedResult) => {
    console.log("QR Code scanned:", decodedResult);
    try {
      const response = await getFoodByName(decodedText);
      setScannedData(response.data);
      setError(null);
      setIsScanning(false);
    } catch (error) {
      console.error("Error fetching food details:", error);
      setError("Error fetching food details");
    }
  };

  const handleError = (error) => {
    console.error("QR Scanner error:", error);
    setError(error.message);
  };

  const handleRestartScan = () => {
    setScannedData(null);
    setError(null);
    setIsScanning(true);
  };

  return (
    <div className="container mx-auto p-6">
      <Card className="max-w-2xl mx-auto p-6">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold">QR Code Scanner</h2>
          <p className="text-gray-600">Scan a QR code to get item details</p>
        </div>

        {isScanning ? (
          <div className="aspect-square max-w-md mx-auto mb-6">
            <Html5QrcodePlugin
              fps={10}
              qrbox={250}
              disableFlip={false}
              qrCodeSuccessCallback={handleDecode}
              qrCodeErrorCallback={handleError}
            />
          </div>
        ) : (
          <div className="text-center mb-4">
            <Button
              onClick={handleRestartScan}
              className="bg-blue-500 hover:bg-blue-600 text-white"
            >
              Scan Code
            </Button>
          </div>
        )}

        {scannedData && <QRItem food={scannedData} />}

        {error && (
          <Alert variant="destructive" className="mt-4">
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}
      </Card>
      {/* <UserFooter /> */}
      <AIWritingAssistant />
    </div>
  );
};

export default QRScanner;