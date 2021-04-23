git add .
echo "Commit Message being sent to main of personal and school."
read commitMsg
git commit -m "$commitMsg"
git push personal main
git push school main
git push heroku main
echo ""
echo ""
echo ""
echo "Commands executed, please look for errors and fix."