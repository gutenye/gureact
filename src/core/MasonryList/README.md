
            <MasonryList
              columns="100px"
              gutter="10px"
              style={{ width: '320px' }}
            >
              {times(5).map(v =>
                <Placeholder width="100%" height="random" key={v} />
              )}
            </MasonryList>