/\*_ async await syntax
_ je n'aime pas trop les try catch mais il faut que je sache à quoi le code doit ressembler

    const fetchCoins = async () => {
      let data = null;
      try {
        const res = await fetch(BASE_URL)
        if (!res.ok) throw new Error('Failed to fetch the data')
           data = await res.json()
        setCoins(data as unknown as CoinGeckoData[])

        return data;
      } catch (error) {
        data = await error;
        setError(data as string)
      }
      finally {
        console.log(data);
        setLoading(false)
      }

     }

    fetchCoins();
     */
