$htmlPath = "C:\Users\ThinkPad\.gemini\antigravity\scratch\rate-card-hub\index.html"
$html = Get-Content -Raw -Path $htmlPath

Write-Host "Converting img1.png to Base64..."
$img1Base64 = "data:image/png;base64," + [Convert]::ToBase64String([IO.File]::ReadAllBytes("C:\Users\ThinkPad\.gemini\antigravity\scratch\rate-card-hub\assets\img1.png"))

Write-Host "Converting img2.png to Base64..."
$img2Base64 = "data:image/png;base64," + [Convert]::ToBase64String([IO.File]::ReadAllBytes("C:\Users\ThinkPad\.gemini\antigravity\scratch\rate-card-hub\assets\img2.png"))

Write-Host "Converting img3.png to Base64..."
$img3Base64 = "data:image/png;base64," + [Convert]::ToBase64String([IO.File]::ReadAllBytes("C:\Users\ThinkPad\.gemini\antigravity\scratch\rate-card-hub\assets\img3.png"))

Write-Host "Converting img4.png to Base64..."
$img4Base64 = "data:image/png;base64," + [Convert]::ToBase64String([IO.File]::ReadAllBytes("C:\Users\ThinkPad\.gemini\antigravity\scratch\rate-card-hub\assets\img4.png"))

Write-Host "Converting logo.png to Base64..."
$logoBase64 = "data:image/png;base64," + [Convert]::ToBase64String([IO.File]::ReadAllBytes("C:\Users\ThinkPad\.gemini\antigravity\scratch\rate-card-hub\assets\logo.png"))

Write-Host "Replacing paths with Base64 data..."
$html = $html.Replace('assets/img1.png', $img1Base64)
$html = $html.Replace('assets/img2.png', $img2Base64)
$html = $html.Replace('assets/img3.png', $img3Base64)
$html = $html.Replace('assets/img4.png', $img4Base64)
$html = $html.Replace('assets/logo.png', $logoBase64)

Write-Host "Saving self-contained index.html..."
Set-Content -Path $htmlPath -Value $html -Encoding utf8
Write-Host "Done!"